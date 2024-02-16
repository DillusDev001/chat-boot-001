import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider, handleCtx } from "@bot-whatsapp/provider-baileys";

const flowBienvenida = addKeyword('hola').addAnswer('Hola, soy Diego tu asistente virtual.');
const flowPregunta = addKeyword('como estas?').addAnswer('Bien Gracias');



/**
 * 
 */

const main = async () => {

    const provider = createProvider(BaileysProvider);

    provider.initHttpServer(3002);

    provider.http?.server.post('/send-message', handleCtx(async(bot, req, res) => {
        await bot.sendMessage('','', {})
        res.end('Server');
    }))

    await createBot({
        flow:createFlow([flowBienvenida, flowPregunta]),
        database: new MemoryDB(),
        provider
    });
}

main();