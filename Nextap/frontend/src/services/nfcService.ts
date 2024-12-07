export const readNfcCard = async (): Promise<string | null> => {
    if ("NDEFReader" in window) {
      try {
        const nfcReader = new (window as any).NDEFReader();
        await nfcReader.scan();
  
        return new Promise((resolve, reject) => {
          nfcReader.onreading = (event: any) => {
            const message = event.message.records[0];
            if (message.recordType === "text") {
              const decoder = new TextDecoder();
              resolve(decoder.decode(message.data));
            } else {
              reject("Invalid NFC data");
            }
          };
  
          nfcReader.onerror = () => {
            reject("Failed to read NFC card.");
          };
        });
      } catch (err) {
        console.error("Error reading NFC card:", err);
        throw new Error("Error reading NFC card.");
      }
    } else {
      throw new Error("NFC not supported on this browser.");
    }
  };