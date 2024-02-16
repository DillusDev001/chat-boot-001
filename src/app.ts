import { MemoryDB, addKeyword, createBot, createFlow, createProvider } from "@bot-whatsapp/bot";
import { BaileysProvider } from "@bot-whatsapp/provider-baileys";

const flowBienvenida = addKeyword('hola').addAnswer('Hola, soy Diego tu asistente virtual.');
const flowPregunta = addKeyword('como estas?').addAnswer('Bien Gracias');

/**
 * 
 */

const main = async () => {

    const provider = createProvider(BaileysProvider);

    await createBot({
        flow:createFlow([flowBienvenida, flowPregunta]),
        database: new MemoryDB(),
        provider
    });
}

main();