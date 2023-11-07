{
    //interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: X;
    }
    // ____________________________________
    const poorDeveloper: Developer<{
        brand: string;
        model: string;
        display: string;
    }> = {
        name: "Abul",
        computer: {
            brand: "HP",
            model: "X-25ur",
            releaseYear: 2023,
        },
        smartWatch: {
            brand: "imilab",
            model: "pro max",
            display: "OLED",
        }
    }
    //---------
    interface AppleWatch {
        brand: string;
        model: string;
        display: string;
        sleepTracker: true;
        stepCounter: true;
    }
    interface Bike {
        model: string;
        cc: string;
    }
    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: "Abul",
        computer: {
            brand: "HP",
            model: "X-25ur",
            releaseYear: 2023,
        },
        smartWatch: {
            brand: "apple",
            model: "pro max",
            display: "OLED",
            sleepTracker: true,
            stepCounter: true,
        },
        bike: {
            model: "yamaha",
            cc: "165",
        }
    }

}