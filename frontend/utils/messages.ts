import messages from '../lang/en/en.json';

/**
 * Get a message by key path
 * @param key - Dot notation path (e.g., 'errors.network_error')
 * @param replacements - Optional object with placeholder replacements
 * @returns The message string
 */
export function getMessage(key: string, replacements: Record<string, string | number> = {}): string {
    const keys = key.split('.');
    let message: any = messages;

    for (const k of keys) {
        message = message[k];
        if (message === undefined) {
            console.warn(`Message key not found: ${key}`);
            return key;
        }
    }

    // Replace placeholders like {variable}
    if (typeof message === 'string' && Object.keys(replacements).length > 0) {
        return message.replace(/\{(\w+)\}/g, (match, placeholder) => {
            return String(replacements[placeholder] || match);
        });
    }

    return message;
}
