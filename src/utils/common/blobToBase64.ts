
// TODO
export async function blobToBase64(blobUrl: string) {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    try {
        return new Promise<string>((resolve, reject) => {
            reader.onloadend = () => {
                if (!reader.result) {
                    reject(new Error('FileReader result is null'));
                }
                const base64String = String(reader.result).split(',')[1];
                resolve(base64String);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(blob);
        });
    } catch (error) {
        throw new Error(`Error fetching blob:${error}`);
    }
}
