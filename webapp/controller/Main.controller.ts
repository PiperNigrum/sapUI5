import MessageBox from "sap/m/MessageBox";
import MessageToast from "sap/m/MessageToast";
import BaseController from "./BaseController";

/**
 * @namespace com.kh.martina.controller
 */
export default class Main extends BaseController {
	public onWhatsAppPress(oEvent: any): void {
		debugger;
		let sUrl = "https://wa.me/491709038616?text=Hallo%20Martina!%20Ich%20habe%20deine%20Seite%20besucht.";
		window.open(sUrl, "_blank");
	}

    public onSharePress(): void {
        if (navigator.share) {
            // Teilen über die Web Share API
            navigator.share({
                title: document.title, // Titel der Seite
                text: "Schau dir diese Seite an!",
                url: window.location.href // Aktuelle URL
            }).then(() => {
                console.log("Seite erfolgreich geteilt.");
            }).catch((error) => {
                console.error("Fehler beim Teilen:", error);
            });
        } else {
            // Fallback für Geräte, die die Web Share API nicht unterstützen
            MessageToast.show("Teilen wird auf diesem Gerät nicht unterstützt.");
        }
    }
}
