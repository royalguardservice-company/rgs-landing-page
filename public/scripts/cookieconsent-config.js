import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

CookieConsent.run({
    guiOptions: {
        consentModal: {
            layout: "box",
            position: "bottom left",
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "th",
        autoDetect: "browser",
        translations: {
            th: {
                consentModal: {
                    title: "เราใช้คุกกี้เพื่อประสบการณ์ที่ดีขึ้น",
                    description: "บริษัท รอยัลการ์ด เซอร์วิสเซส ให้ความสำคัญต่อความเป็นส่วนตัวของท่าน เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์การใช้งานเว็บไซต์ และวิเคราะห์การใช้งานเพื่อพัฒนาบริการให้ดียิ่งขึ้น",
                    acceptAllBtn: "ยอมรับทั้งหมด",
                    acceptNecessaryBtn: "ยอมรับเฉพาะจำเป็น",
                    showPreferencesBtn: "จัดการค่ากำหนด",
                    footer: "<a href=\"/policy\">นโยบายความเป็นส่วนตัว</a>"
                },
                preferencesModal: {
                    title: "ค่ากำหนดความยินยอม",
                    acceptAllBtn: "ยอมรับทั้งหมด",
                    acceptNecessaryBtn: "ยอมรับเฉพาะจำเป็น",
                    savePreferencesBtn: "บันทึกค่ากำหนด",
                    closeIconLabel: "ปิดหน้าต่าง",
                    serviceCounterLabel: "บริการ|บริการ",
                    sections: [
                        {
                            title: "การใช้คุกกี้",
                            description: "เราใช้คุกกี้เพื่อให้ท่านได้รับประสบการณ์ที่ดีที่สุดในการใช้งานเว็บไซต์ ท่านสามารถเลือกประเภทคุกกี้ที่ต้องการอนุญาตได้ตามความต้องการของท่าน"
                        },
                        {
                            title: "คุกกี้ที่จำเป็น <span class=\"pm__badge\">เปิดใช้งานเสมอ</span>",
                            description: "คุกกี้ประเภทนี้จำเป็นต่อการทำงานของเว็บไซต์ ไม่สามารถปิดใช้งานได้ ได้แก่ คุกกี้สำหรับการจัดการเซสชันและความปลอดภัยพื้นฐานของเว็บไซต์",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "คุกกี้วิเคราะห์",
                            description: "คุกกี้ประเภทนี้ช่วยให้เราสามารถวิเคราะห์และปรับปรุงประสบการณ์การใช้งานเว็บไซต์ของท่าน และเข้าใจพฤติกรรมการใช้งานเพื่อพัฒนาบริการให้ดียิ่งขึ้น",
                            linkedCategory: "analytics"
                        },
                        {
                            title: "ข้อมูลเพิ่มเติม",
                            description: "หากท่านมีข้อสงสัยเกี่ยวกับนโยบายคุกกี้และสิทธิในการเลือกของท่าน กรุณา <a class=\"cc__link\" href=\"/policy\">ติดต่อเรา</a> หรือศึกษา <a class=\"cc__link\" href=\"/policy\">นโยบายความเป็นส่วนตัว</a> ของเรา"
                        }
                    ]
                }
            }
        }
    },
    onConsent: () => {
        if (CookieConsent.acceptedCategory('analytics')) {
            if (typeof window.updateConsents === 'function') {
                window.updateConsents();
            }
        }
    },
    onFirstConsent: () => {
        if (CookieConsent.acceptedCategory('analytics')) {
            if (typeof window.updateConsents === 'function') {
                window.updateConsents();
            }
        }
    }
});
