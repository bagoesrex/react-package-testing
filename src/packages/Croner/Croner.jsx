import { useEffect } from "react";
import { Cron } from "croner";

export default function Croner() {
    useEffect(() => {
        // Jalankan Setiap 5 Detik
        // const job = new Cron('*/5 * * * * *', () => {
        //     console.log('Cron task executed at', new Date().toLocaleTimeString());
        // });

        // Jalankan setiap 5 detik dan 3 Kali proses saja
        const job = new Cron('*/5 * * * * *', { maxRuns: 3 }, () => {
            console.log('Cron task executed at', new Date().toLocaleTimeString());
        });

        return () => {
            job.stop();
            console.log('Cron job stopped');
        };
    }, []);

    return (
        <div className="flex flex-col items-center">
            <h1 className="pb-10 font-extrabold font-sans">Croner</h1>
            <p>Cek console setiap 5 detik untuk melihat output cron task.</p>
        </div>
    );
}
