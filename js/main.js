// js/main.js

// Global list of Pali consonants (Thai script) for reference
const paliConsonants = [
    'ก', 'ข', 'ค', 'ฆ', 'ง', 'จ', 'ฉ', 'ช', 'ฌ', 'ญ',
    'ฏ', 'ฐ', 'ฑ', 'ฒ', 'ณ', 'ต', 'ถ', 'ท', 'ธ', 'น',
    'ป', 'ผ', 'พ', 'ภ', 'ม', 'ย', 'ร', 'ล', 'ว', 'ส', 'ห', 'ฬ'
];

// Helper function to remove Virama (ธนฑฆาต) from a character
function removeVirama(char) {
    // U+0E3A is THAI CHARACTER THANTHAKHAT (Virama)
    return char.replace(/\u0E3A/g, '');
}

function getTransformedEnding(lastNounChar, suffix, karantaType, nounFull) {
    // ใช้ if-else if structure ที่ชัดเจนสำหรับแต่ละ karantaType
    if (karantaType === 'a-pungling') { // อ การันต์, ปุงลิงค์
        const baseConsonant = lastNounChar;
        switch (suffix) {
            case "โอ": return 'โ' + baseConsonant;
            case "อา": return baseConsonant + 'า';
            case "เอ": return 'เ' + baseConsonant;
            case "เอน": return 'เ' + baseConsonant + 'น';
            case "เอหิ": return 'เ' + baseConsonant + 'หิ';
            case "เอภิ": return 'เ' + baseConsonant + 'ภิ';
            case "อานํ": return baseConsonant + 'านํ';
            case "เอสุ": return 'เ' + baseConsonant + 'สุ';
            case "อสฺส": return baseConsonant + 'สฺส';
            case "อาย": return baseConsonant + 'าย';
            case "อตฺถํ": return baseConsonant + 'ตฺถํ';
            case "อมฺหิ": return baseConsonant + 'มฺหิ';
            case "อสฺมา": return baseConsonant + 'สฺมา';
            case "อมฺหา": return baseConsonant + 'มฺหา';
            case "อสฺมิํ": return baseConsonant + 'สฺมิํ';
            case "โต": return 'โต';
            default: return suffix;
        }
    }
    else if (karantaType === 'i-pungling') { // อิ การันต์, ปุงลิงค์
        switch (suffix) {
            case "อโย": return 'โย';
            case "อี": return 'ี';
            case "อิํ": return 'ิํ';
            case "อินา": return 'ินา';
            case "อีหิ": return 'ีหิ';
            case "อีภิ": return 'ีภิ';
            case "อิสฺส": return 'ิสฺส';
            case "อิโน": return 'ิโน';
            case "อีนํ": return 'ีนํ';
            case "อิสฺมา": return 'ิสฺมา';
            case "อิมฺหา": return 'ิมฺหา';
            case "อีสุ": return 'ีสุ';
            case "เอ": return 'ิเย';
            case "อิมฺหิ": return 'ิมฺหิ';
            case "อิสฺมิํ": return 'ิสฺมิํ';
            default: return suffix;
        }
    }
    else if (karantaType === 'e-pungling') { // อี การันต์, ปุงลิงค์
        switch (suffix) {
            case "อี": return 'ี'; // เสฏฺฐี (คงรูป)
            case "อิโน": return 'ิโน'; // เสฏฺฐิโน
            case "อิํ": return 'ิํ'
            case "อินํ": return 'ินํ'; // เสฏฺฐินํ
            case "อินา": return 'ินา'; // เสฏฺฐินา
            case "อีหิ": return 'ีหิ';
            case "อีภิ": return 'ีภิ';
            case "อิสฺส": return 'ิสฺส';
            case "อีนํ": return 'ีนํ';
            case "อิสฺมา": return 'ิสฺมา';
            case "อิมฺหา": return 'ิมฺหา'; // แก้ไขตรงนี้
            case "อิสฺมิํ": return 'ิสฺมิํ';
            case "อิมฺหิ": return 'ิมฺหิ';
            case "อีสุ": return 'ีสุ';
            case "อิ": return 'ิ'; // เสฏฺฐิ (อาลปนะ เอกวจนะ)
            case "ํ": return 'ิํ';
            default: return suffix;
        }
    }
    else if (karantaType === 'u-pungling') { // อุ การันต์, ปุงลิงค์
        switch (suffix) {
            case "อุ": return 'ุ'; // ครุ (คงรูป)
            case "อโว": return 'โว'; // ครโว (อุ -> อ + โว)
            case "อู": return 'ู'; // ครู (อุ -> อู)
            case "อุํ": return 'ุํ'; // ครุํ (คง อุ, เพิ่ม ํ)
            case "อุนา": return 'ุนา'; // ครุนา (คง อุ, เพิ่ม นา)
            case "อูหิ": return 'ูหิ'; // ครูหิ (อุ -> อู, เพิ่ม หิ)
            case "อูภิ": return 'ูภิ'; // ครูภิ (อุ -> อู, เพิ่ม ภิ)
            case "อุสฺส": return 'ุสฺส'; // ครุสฺส (คง อุ, เพิ่ม สฺส)
            case "อุโน": return 'ุโน'; // ครุโน (คง อุ, เพิ่ม โน)
            case "อูนํ": return 'ูนํ'; // ครูนํ (อุ -> อู, เพิ่ม นํ)
            case "อุสฺมา": return 'ุสฺมา'; // ครุสฺมา (คง อุ, เพิ่ม สฺมา)
            case "อุมฺหา": return 'ุมฺหา'; // ครุมฺหา (คง อุ, เพิ่ม มฺหา)
            case "อุสฺมิํ": return 'ุสฺมิํ'; // ครุสฺมิํ (คง อุ, เพิ่ม สฺมิํ)
            case "อุมฺหิ": return 'ุมฺหิ'; // ครุมฺหิ (คง อุ, เพิ่ม มฺหิ)
            case "อูสุ": return 'ูสุ'; // ครูสุ (อุ -> อู, เพิ่ม สุ)
            case "อเว": return 'เว'; // ครเว (อุ -> อ + เว)
            default: return suffix;
        }
    }
    else if (karantaType === 'oo-pungling') { // อู การันต์, ปุงลิงค์
        switch (suffix) {
            case "อู": return 'ู'; // วิญฺญู (คงรูป)
            case "อุโน": return 'ุโน'; // วิญฺญูโน (รัสสะ อู เป็น อุ)
            case "อุํ": return 'ุํ'; // วิญฺญูํ (รัสสะ อู เป็น อุ)
            case "อุนา": return 'ุนา'; // วิญฺญูนา (รัสสะ อู เป็น อุ)
            case "อูหิ": return 'ูหิ'; // วิญฺญูหิ
            case "อูภิ": return 'ูภิ'; // วิญฺญูภิ
            case "อุสฺส": return 'ุสฺส'; // วิญฺญูสฺส (รัสสะ อู เป็น อุ)
            case "อูนํ": return 'ูนํ'; // วิญฺญูนํ
            case "อุสฺมา": return 'ุสฺมา'; // วิญฺญูสฺมา (รัสสะ อู เป็น อุ)
            case "อุมฺหา": return 'ุมฺหา'; // วิญฺญูมฺหา (รัสสะ อู เป็น อุ)
            case "อุสฺมิํ": return 'ุสฺมิํ'; // วิญฺญูสฺมิํ (รัสสะ อู เป็น อุ)
            case "อุมฺหิ": return 'ุมฺหิ'; // วิญฺญูมฺหิ (รัสสะ อู เป็น อุ)
            case "อูสุ": return 'ูสุ'; // วิญฺญูสุ
            case "อุ": return 'ุ'; // วิญฺญู (รัสสะ อู เป็น อุ)
            default: return suffix;
        }
    }
    else if (karantaType === 'aa-itthiling') { // อา การันต์, อิตถีลิงค์
        // Note: lastNounChar will be 'า' for Aa-karanta
        switch (suffix) {
            case "อา": return 'า'; // คงรูป (e.g. กญฺญา -> กญฺญา)
            case "อาโย": return 'าโย'; // คงรูป (e.g. กญฺญาโย -> กญฺญาโย)
            case "ํ": return 'ํ'; // กญฺญา + อํ = กญฺญํ
            case "อาย": return 'าย'; // กญฺญา + นา/ส/สฺมา = กญฺญาย
            case "อาหิ": return 'าหิ'; // คงรูป (e.g. กญฺญาหิ -> กญฺญาหิ)
            case "อาภิ": return 'าภิ'; // คงรูป (e.g. กญฺญาภิ -> กญฺญาภิ)
            case "อานํ": return 'านํ'; // คงรูป (e.g. กญฺญานํ -> กญฺญานํ)
            case "อายํ": return 'ายํ'; // กญฺญา + สฺมิํ = กญฺญายํ
            case "อาสุ": return 'าสุ'; // คงรูป (e.g. กญฺญาสุ -> กญฺญาสุ)
            case "เอ": return nounFull.slice(0, -2) + 'เ' + nounFull.slice(-2, -1); // กญฺญา -> กญฺเญ
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อิ การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'i-itthiling') { // อิ การันต์, อิตถีลิงค์
        // lastNounChar สำหรับ อิ การันต์ จะเป็น 'ิ'
        switch (suffix) {
            case "อิ": return 'ิ';     // สำหรับ ปฐมา เอกวจนะ และ อาลปนะ เอกวจนะ (รตฺติ)
            case "อิโย": return 'ิโย'; // รตฺติโย
            case "อี": return 'ี';     // รตฺตี
            case "อิํ": return 'ิํ';    // รตฺติํ
            case "อิยา": return 'ิยา'; // รตฺติยา
            case "ยา": return 'ฺยา';    // รตฺตยา (base 'รตฺต' + 'ยา')
            case "อีหิ": return 'ีหิ'; // รตฺตีหิ
            case "อีภิ": return 'ีภิ'; // รตฺตีภิ
            case "อีนํ": return 'ีนํ'; // รตฺตีนํ
            case "อิยํ": return 'ิยํ'; // รตฺติยํ
            case "ยํ": return 'ฺยํ';    // รตฺตยํ (base 'รตฺต' + 'ยํ')
            case "อีสุ": return 'ีสุ'; // รตฺตีสุ
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อี การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'e-itthiling') { // อี การันต์, อิตถีลิงค์
        switch (suffix) {
            case "อี": return 'ี';     // คงรูป
            case "อิโย": return 'ิโย'; // รัสสะ อี เป็น อิ
            // case "อี": return 'ี';     // กรณีคงรูป (บางครั้ง) - ซ้ำกับข้างบน ลบออก
            case "อิํ": return 'ิํ';      // **แก้ไขตรงนี้** (เดิมคือ 'ํ' return 'ึ')
            case "อิยํ": return 'ิยํ';    // **เพิ่มตรงนี้**
            // case "ํ": return 'ึ';      // **ลบออก** เนื่องจากใช้ "อิํ" และ "อิยํ" แล้ว
            // case "อินํ": return 'ินํ';  // **ลบออก** เนื่องจากใช้ "อิยํ" และ "อิํ" แทน
            case "อิยา": return 'ิยา'; // รัสสะ อี เป็น อิ, แปลง นา/ส/สฺมา เป็น ยา
            // case "อิสฺสา": return 'ิสฺสา'; // **ลบออก** เนื่องจากไม่มีใน declension-rules.js ใหม่
            case "อีหิ": return 'ีหิ'; // คงรูป
            case "อีภิ": return 'ีภิ'; // คงรูป
            case "อีนํ": return 'ีนํ'; // คงรูป
            // case "อิยํ": return 'ิยํ'; // ซ้ำกับข้างบน ลบออก
            case "อีสุ": return 'ีสุ'; // คงรูป
            case "อิ": return 'ิ';     // รัสสะ อี เป็น อิ (สำหรับ อาลปนะ เอกวจนะ)
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อุ การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'u-itthiling') { // อุ การันต์, อิตถีลิงค์
        // lastNounChar สำหรับ อุ การันต์ คือ 'ุ'
        switch (suffix) {
            case "อุ": return 'ุ';     // คงรูป
            case "อุโย": return 'ุโย'; // คงรูป
            case "อู": return 'ู';     // ทีฆะ อุ เป็น อู
            case "อุํ": return 'ุํ';    // คงรูป, เพิ่มนิคคหิต
            case "อุยา": return 'ุยา'; // คงรูป, แปลง นา/ส/สฺมา เป็น ยา
            case "อุยํ": return 'ุยํ';  // คงรูป, แปลง สฺมิํ เป็น ยํ
            case "อูหิ": return 'ูหิ'; // ทีฆะ อุ เป็น อู
            case "อูภิ": return 'ูภิ'; // ทีฆะ อุ เป็น อู
            case "อูนํ": return 'ูนํ'; // ทีฆะ อุ เป็น อู
            case "อูสุ": return 'ูสุ'; // ทีฆะ อุ เป็น อู
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อู การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'oo-itthiling') { // อู การันต์, อิตถีลิงค์
        // lastNounChar สำหรับ อู การันต์ คือ 'ู'
        switch (suffix) {
            case "อู": return 'ู';     // คงรูป
            case "อุโย": return 'ุโย'; // รัสสะ อู เป็น อุ
            case "อุํ": return 'ุํ';    // รัสสะ อู เป็น อุ, เพิ่มนิคคหิต
            case "อุยา": return 'ุยา'; // รัสสะ อู เป็น อุ, แปลง นา/ส/สฺมา เป็น ยา
            case "อุยํ": return 'ุยํ';  // รัสสะ อู เป็น อุ, แปลง สฺมึ เป็น ยํ
            case "อูหิ": return 'ูหิ'; // คงรูป
            case "อูภิ": return 'ูภิ'; // คงรูป
            case "อูนํ": return 'ูนํ'; // คงรูป
            case "อูสุ": return 'ูสุ'; // คงรูป
            case "อุ": return 'ุ';     // รัสสะ อู เป็น อุ (สำหรับ อาลปนะ เอกวจนะ)
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'a-napun') { // อ การันต์, นปุงสกลิงค์
        const baseConsonant = lastNounChar;
        switch (suffix) {
            case "อํ": return 'ํ';      // สำหรับ ปฐมา/ทุติยา เอกวจนะ (อํ)
            case "อานิ": return baseConsonant + 'านิ';   // สำหรับ ปฐมา/ทุติยา/อาลปนะ พหุวจนะ (อานิ)
            case "เอน": return 'เ' + baseConsonant + 'น'; // ตติยา เอกวจนะ
            case "เอหิ": return 'เ' + baseConsonant + 'หิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "เอภิ": return 'เ' + baseConsonant + 'ภิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "อสฺส": return baseConsonant + 'สฺส'; // จตุตถี/ฉัฏฐี เอกวจนะ
            case "อาย": return baseConsonant + 'าย';   // จตุตถี เอกวจนะ
            case "อตฺถํ": return baseConsonant + 'ตฺถํ'; // จตุตถี เอกวจนะ
            case "อานํ": return baseConsonant + 'านํ'; // จตุตถี/ฉัฏฐี พหุวจนะ
            case "อสฺมา": return baseConsonant + 'สฺมา'; // ปัญจมี เอกวจนะ
            case "อมฺหา": return baseConsonant + 'มฺหา'; // ปัญจมี เอกวจนะ
            case "อา": return baseConsonant + 'า';   // ปัญจมี เอกวจนะ
            case "อสฺมิํ": return baseConsonant + 'สฺมิํ'; // สัตตมี เอกวจนะ
            case "อมฺหิ": return baseConsonant + 'มฺหิ'; // สัตตมี เอกวจนะ
            case "เอ": return 'เ' + baseConsonant;   // สัตตมี เอกวจนะ
            case "เอสุ": return 'เ' + baseConsonant + 'สุ'; // สัตตมี พหุวจนะ
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อิ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'i-napun') { // อิ การันต์, นปุงสกลิงค์
        // lastNounChar สำหรับ อิ การันต์ คือ 'ิ'
        switch (suffix) {
            case "อิ": return 'ิ';     // สำหรับ ปฐมา/อาลปนะ เอกวจนะ
            case "อิํ": return 'ิํ';    // สำหรับ ทุติยา เอกวจนะ (ถ้า final_suffix เป็น อิํ)
            case "ึ": return 'ึ';      // สำหรับ ทุติยา เอกวจนะ (ถ้า final_suffix เป็น ึ)
            case "อีนิ": return 'ีนิ';   // สำหรับ ปฐมา/ทุติยา/อาลปนะ พหุวจนะ
            case "อี": return 'ี';     // สำหรับ ปฐมา/ทุติยา/อาลปนะ พหุวจนะ
            case "อินา": return 'ินา'; // ตติยา เอกวจนะ
            case "อีหิ": return 'ีหิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "อีภิ": return 'ีภิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "อิสฺส": return 'ิสฺส'; // จตุตถี/ฉัฏฐี เอกวจนะ
            case "อิโน": return 'ิโน'; // จตุตถี/ฉัฏฐี เอกวจนะ
            case "อีนํ": return 'ีนํ'; // จตุตถี/ฉัฏฐี พหุวจนะ
            case "อิสฺมา": return 'ิสฺมา'; // ปัญจมี เอกวจนะ
            case "อิมฺหา": return 'ิมฺหา'; // ปัญจมี เอกวจนะ
            case "อิสฺมึ": return 'ิสฺมึ'; // สัตตมี เอกวจนะ
            case "อิมฺหิ": return 'ิมฺหิ'; // สัตตมี เอกวจนะ
            case "อีสุ": return 'ีสุ'; // สัตตมี พหุวจนะ
            default: return suffix;
        }
    }
    // --- เพิ่มส่วนสำหรับ อุ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'u-napun') { // อุ การันต์, นปุงสกลิงค์
        const baseConsonant = lastNounChar; // สำหรับ อุ การันต์ พยัญชนะท้ายคือ ุ
        switch (suffix) {
            case "อุ": return 'ุ';     // สำหรับ ปฐมา/อาลปนะ เอกวจนะ
            case "อุํ": return 'ุํ';    // สำหรับ ทุติยา เอกวจนะ
            case "อูนิ": return 'ูนิ';   // สำหรับ ปฐมา/ทุติยา/อาลปนะ พหุวจนะ
            case "อู": return 'ู';     // สำหรับ ปฐมา/ทุติยา/อาลปนะ พหุวจนะ
            case "อุนา": return 'ุนา'; // ตติยา เอกวจนะ
            case "อูหิ": return 'ูหิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "อูภิ": return 'ูภิ'; // ตติยา/ปัญจมี พหุวจนะ
            case "อุสฺส": return 'ุสฺส'; // จตุตถี/ฉัฏฐี เอกวจนะ
            case "อุโน": return 'ุโน'; // จตุตถี/ฉัฏฐี เอกวจนะ
            case "อูนํ": return 'ูนํ'; // จตุตถี/ฉัฏฐี พหุวจนะ
            case "อุสฺมา": return 'ุสฺมา'; // ปัญจมี เอกวจนะ
            case "อุมฺหา": return 'ุมฺหา'; // ปัญจมี เอกวจนะ
            case "อุสฺมึ": return 'ุสฺมึ'; // สัตตมี เอกวจนะ
            case "อุมฺหิ": return 'ุมฺหิ'; // สัตตมี เอกวจนะ
            case "อูสุ": return 'ูสุ'; // สัตตมี พหุวจนะ
            default: return suffix;
        }
    }
    // --- สิ้นสุดส่วนที่เพิ่ม ---

    return suffix; // Fallback for unhandled karanta types or suffix
}


// Function to combine a noun (e.g. "มุนิ") with a suffix
function combineNounWithSuffix(noun, suffix, originalRule, karantaType) {
    const lastCharNoun = noun.slice(-1);
    const base = noun.slice(0, -1);
    const isLastCharACommonPaliConsonant = paliConsonants.includes(lastCharNoun);
    if (karantaType === 'a-pungling') {
        const allASuffixes = ["โอ", "อา", "เอ", "เอน", "เอหิ", "เอภิ", "เอสุ", "อานํ", "อสฺส", "อาย", "อตฺถํ", "อมฺหิ", "อสฺมา", "อมฺหา", "อสฺมิํ", "โต"];

        if (allASuffixes.includes(suffix) && isLastCharACommonPaliConsonant) {
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'i-pungling') {
        const iKarantaTransformingSuffixes = ["อโย", "อิํ", "อี", "อินา", "อีหิ", "อีภิ", "อิสฺส", "อิโน", "อีนํ", "อิสฺมา", "อิมฺหา", "อีสุ", "เอ", "อิมฺหิ", "อิสฺมิํ"];

        if (iKarantaTransformingSuffixes.includes(suffix)) {
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'e-pungling') {
        const eKarantaTransformingSuffixes = [
            "อี", "อิํ", "อิโน", "อินํ", "อินา", "อีหิ", "อีภิ",
            "อิสฺส", "อีนํ", "อิสฺมา", "อิมฺหา", "อิสฺมิํ", "อิมฺหิ", "อีสุ", "อิ", "อีโย", "ํ"
        ];

        if (eKarantaTransformingSuffixes.includes(suffix) && lastCharNoun === 'ี') {
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'u-pungling') {
        const uKarantaTransformingSuffixes = [
            "อุ", "อโว", "อู", "อุํ", "อุนา", "อูหิ", "อูภิ",
            "อุสฺส", "อุโน", "อูนํ", "อุสฺมา", "อุมฺหา",
            "อุสฺมิํ", "อุมฺหิ", "อูสุ", "อเว"
        ];

        if (uKarantaTransformingSuffixes.includes(suffix) && lastCharNoun === 'ุ') {
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'oo-pungling') {
        const ooKarantaTransformingSuffixes = [
            "อู", "อุโน", "อุํ", "อุนา", "อูหิ", "อูภิ",
            "อุสฺส", "อูนํ", "อุสฺมา", "อุมฺหา",
            "อุสฺมิํ", "อุมฺหิ", "อูสุ", "อุ"
        ];

        if (ooKarantaTransformingSuffixes.includes(suffix) && lastCharNoun === 'ู') {
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'aa-itthiling') {
        const aaKarantaTransformingSuffixes = [
            "อา", "อาโย", "ํ", "อาย", "อาหิ", "อาภิ",
            "อานํ", "อายํ", "อาสุ", "เอ"
        ];
        if (aaKarantaTransformingSuffixes.includes(suffix) && lastCharNoun === 'า') {
            // สำหรับ suffix "เอ" ของ อา-การันต์, getTransformedEnding จะคืนค่าเป็นคำผันสมบูรณ์ (เช่น กญฺเญ)
            // ดังนั้นเราจะไม่ต้องนำ base มาต่อข้างหน้าอีก
            if (suffix === "เอ") {
                return getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
            // สำหรับ suffix อื่นๆ ของ อา-การันต์ ให้ต่อ base ตามปกติ
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    // --- เพิ่มส่วนสำหรับ อิ การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'i-itthiling') {
        const iItthilingTransformingSuffixes = [
            "อิ",
            "อิโย", "อี",
            "อิํ",
            "อิยา", "ยา", "ฺยา", // ยืนยันว่ามี ฺยา อยู่ในลิสต์
            "อีหิ", "อีภิ",
            "อีนํ",
            "อิยํ", "ยํ", "ฺยํ", // ยืนยันว่ามี ฺยํ อยู่ในลิสต์
            "อีสุ"
        ];

        if (iItthilingTransformingSuffixes.includes(suffix) && lastCharNoun === 'ิ') {
            let conjugatedForm = base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);

            // *** REVISED logic for reduction based on the new character indexing ***
            // กฎ: รตฺตฺยา (รูปสำเร็จแรก)
            // นับจากขวา: า-1, ย-2, ฺ-3, ต-4, ฺ-5, ต-6
            // หากอักขระที่ 3+4 เหมือนกันกับอักขระที่ 5+6 (เช่น "ฺต" กับ "ฺต") ให้ลบ 3+4 ออกไป

            const len = conjugatedForm.length;
            // เงื่อนไข: ความยาวต้องพอให้มี pattern (อย่างน้อย 6 ตัวอักษร)
            // และ suffix ต้องเป็น 'ฺยา' หรือ 'ฺยํ' ที่เป็นตัวกระตุ้นกฎนี้
            if (len >= 6 && (suffix === 'ฺยา' || suffix === 'ฺยํ')) {
                // ดึงตัวอักษรตามตำแหน่งจากขวา (ใช้ 0-based index จากท้าย)
                const charAtRight3 = conjugatedForm[len - 3]; // ตัวที่ 3 จากขวา (ฺ)
                const charAtRight4 = conjugatedForm[len - 4]; // ตัวที่ 4 จากขวา (ต)
                const charAtRight5 = conjugatedForm[len - 5]; // ตัวที่ 5 จากขวา (ฺ)
                const charAtRight6 = conjugatedForm[len - 6]; // ตัวที่ 6 จากขวา (ต)

                // ตรวจสอบเงื่อนไข:
                // 1. ตำแหน่งที่ 3 และ 5 จากขวาต้องเป็นธนฑฆาต (ฺ)
                // 2. พยัญชนะที่ตำแหน่ง 4 จากขวา (ต) และ 6 จากขวา (ต) ต้องเหมือนกัน (ไม่สนธนฑฆาต)
                if (charAtRight3 === '\u0E3A' && charAtRight5 === '\u0E3A' &&
                    removeVirama(charAtRight4) === removeVirama(charAtRight6)) {

                    // ถ้าเงื่อนไขเป็นจริง: ลบ "ฺต" ที่ตำแหน่ง 3+4 จากขวาออก
                    // 'รตฺตฺยา' (len=7) -> `conjugatedForm.slice(0, len-4)` คือ `รตฺ` (slice(0,3))
                    //                  -> `conjugatedForm.slice(len-2)` คือ `ยา` (slice(5))
                    // ผลลัพธ์คือ `รตฺยา`
                    conjugatedForm = conjugatedForm.slice(0, len - 4) + conjugatedForm.slice(len - 2);
                }
            }
            return conjugatedForm;
        }
    }
    else if (karantaType === 'i-itthiling') {
        // ... (โค้ด i-itthiling)
    }
    // --- เพิ่มส่วนสำหรับ อี การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'e-itthiling') { // อี การันต์, อิตถีลิงค์
        const eItthilingTransformingSuffixes = [
            "อี", "อิโย", "อิํ", "อิยํ", // **แก้ไข: เพิ่ม อิํ, อิยํ, ลบ ํ, อินํ**
            "อิยา", "อีหิ", "อีภิ",
            "อีนํ", "อีสุ", "อิ"
            // ลบ "อิสฺสา" ออก
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็น 'ี' (สำหรับ อี การันต์)
        if (eItthilingTransformingSuffixes.includes(suffix) && lastCharNoun === 'ี') {
            const baseWithoute = noun.slice(0, -1); // เช่น 'นารี' -> 'นาร'

            // --- REVISED Special cases for e-Itthiling ---
            if (suffix === "อี") { // ปฐมา เอกวจนะ
                return noun; // นารี + สิ = นารี (คงรูป)
            }
            else if (suffix === "อิํ") { // ทุติยา เอกวจนะ
                return baseWithoute + 'ิํ'; // นารี + อํ = นาริํ
            }
            else if (suffix === "อิยํ") { // ทุติยา/สัตตมี เอกวจนะ
                return baseWithoute + 'ิยํ'; // นารี + อํ/สฺมิํ = นาริยํ
            }
            else if (suffix === "อิ") { // อาลปนะ เอกวจนะ
                return baseWithoute + 'ิ'; // นารี + สิ = นาริ
            }
            // สำหรับกรณีอื่นๆ ที่ต้อง rassify หรือเปลี่ยนรูป เช่น อิยา, อิสฺสา, อิยํ
            else {
                return baseWithoute + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
        }
    }
    // --- เพิ่มส่วนสำหรับ อุ การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'u-itthiling') { // อุ การันต์, อิตถีลิงค์
        const uItthilingTransformingSuffixes = [
            "อุ", "อุโย", "อู", "อุํ",
            "อุยา", "อุยํ", "อูหิ", "อูภิ",
            "อูนํ", "อูสุ"
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็น 'ุ' (สำหรับ อุ การันต์)
        if (uItthilingTransformingSuffixes.includes(suffix) && lastCharNoun === 'ุ') {
            const baseWithoutU = noun.slice(0, -1); // เช่น 'รชฺชุ' -> 'รชฺช'

            // --- Special cases for U-Itthiling ---
            if (suffix === "อุ") { // ปฐมา เอกวจนะ / อาลปนะ เอกวจนะ
                return noun; // รชฺชุ + สิ = รชฺชุ (คงรูป)
            }
            else if (suffix === "อุํ") { // ทุติยา เอกวจนะ
                return baseWithoutU + 'ุํ'; // รชฺชุ + อํ = รชฺชุํ
            }
            else if (suffix === "อุยํ") { // สัตตมี เอกวจนะ
                return baseWithoutU + 'ุยํ'; // รชฺชุ + สฺมึ = รชฺชุยํ
            }
            // สำหรับกรณีอื่นๆ ที่ต้องทีฆะ หรือเปลี่ยนรูป
            else {
                return baseWithoutU + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
        }
    }
    // --- เพิ่มส่วนสำหรับ อู การันต์ (อิตถีลิงค์) ---
    else if (karantaType === 'oo-itthiling') { // อู การันต์, อิตถีลิงค์
        const ooItthilingTransformingSuffixes = [
            "อู", "อุโย", "อุํ", "อุยา", "อุยํ",
            "อูหิ", "อูภิ", "อูนํ", "อูสุ", "อุ"
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็น 'ู' (สำหรับ อู การันต์)
        if (ooItthilingTransformingSuffixes.includes(suffix) && lastCharNoun === 'ู') {
            const baseWithoutOo = noun.slice(0, -1); // เช่น 'วธู' -> 'วธ'

            // --- Special cases for Oo-Itthiling ---
            if (suffix === "อู") { // ปฐมา เอกวจนะ
                return noun; // วธู + สิ = วธู (คงรูป)
            }
            else if (suffix === "อุํ") { // ทุติยา เอกวจนะ
                return baseWithoutOo + 'ุํ'; // วธู + อํ = วธุํ
            }
            else if (suffix === "อุ") { // อาลปนะ เอกวจนะ
                return baseWithoutOo + 'ุ'; // วธู + สิ = วธุ
            }
            else if (suffix === "อุยา") { // ตติยา/จตุตถี/ปัญจมี/ฉัฏฐี เอกวจนะ
                return baseWithoutOo + 'ุยา'; // วธู + นา/ส/สฺมา = วธุยา
            }
            else if (suffix === "อุยํ") { // สัตตมี เอกวจนะ
                return baseWithoutOo + 'ุยํ'; // วธู + สฺมึ = วธุยํ
            }
            // สำหรับกรณีอื่นๆ ที่ต้องทีฆะ หรือเปลี่ยนรูป
            else {
                return baseWithoutOo + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
        }
    }
    // --- เพิ่มส่วนสำหรับ อ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'a-napun') { // อ การันต์, นปุงสกลิงค์
        const aNapunTransformingSuffixes = [
            "อํ", "อานิ", "เอน", "เอหิ", "เอภิ",
            "อสฺส", "อาย", "อตฺถํ", "อานํ",
            "อสฺมา", "อมฺหา", "อา",
            "อสฺมิํ", "อมฺหิ", "เอ", "เอสุ"
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็นพยัญชนะ (สำหรับ อ การันต์)
        if (aNapunTransformingSuffixes.includes(suffix) && paliConsonants.includes(lastCharNoun)) {
            // สำหรับ อ การันต์ ส่วนใหญ่จะเอา base มาต่อเลย, getTransformedEnding จะจัดการสระ/พยัญชนะเอง
            // ยกเว้นกรณีพิเศษที่ต้องคืนค่าเป็นคำนามเดิม + ํ (ปฐมา/ทุติยา เอกวจนะ)
            if (suffix === "ํ" && (originalRule.vibhatti === "ปฐมา" || originalRule.vibhatti === "ทุติยา")) {
                return noun + 'ํ'; // กุล + อํ = กุลํ
            }
            // สำหรับ อาลปนะ เอกวจนะ (สิ -> ํ)
            else if (suffix === "ํ" && originalRule.vibhatti === "อาลปนะ") {
                return noun + 'ํ'; // ภนฺเต + สิ (ตัวอย่าง) -> ภนฺเตํ
            }
            // สำหรับกรณีอื่นๆ
            return base + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
        }
    }
    else if (karantaType === 'a-napun') {
        // ... (โค้ด a-napun)
    }
    // --- เพิ่มส่วนสำหรับ อิ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'i-napun') { // อิ การันต์, นปุงสกลิงค์
        const iNapunTransformingSuffixes = [
            "อิ", "ิํ", "อีนิ", "อี", "อินา", "อีหิ", "อีภิ",
            "อิสฺส", "อิโน", "อีนํ",
            "อิสฺมา", "อิมฺหา",
            "อิสฺมึ", "อิมฺหิ", "อีสุ"
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็น 'ิ' (สำหรับ อิ การันต์)
        if (iNapunTransformingSuffixes.includes(suffix) && lastCharNoun === 'ิ') {
            const baseWithoutI = noun.slice(0, -1); // เช่น 'อตฺถิ' -> 'อตฺถ'

            // --- Special cases for I-Napun ---
            if (suffix === "อิ") { // ปฐมา/อาลปนะ เอกวจนะ
                return noun; // อตฺถิ + สิ = อตฺถิ (คงรูป)
            }
            else if (suffix === "ึ") { // ทุติยา เอกวจนะ
                return baseWithoutI + 'ึ'; // อตฺถิ + อํ = อตฺถึ
            }
            // สำหรับพหุวจนะที่ลงท้ายด้วย อีนิ (ต้องทีฆะ อิ ก่อน)
            else if (suffix === "อีนิ") {
                return baseWithoutI + 'ีนิ';
            }
            // สำหรับพหุวจนะที่ลงท้ายด้วย อี (ต้องทีฆะ อิ ก่อน)
            else if (suffix === "อี") {
                return baseWithoutI + 'ี';
            }
            // สำหรับกรณีอื่นๆ
            else {
                return baseWithoutI + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
        }
    }
    // --- เพิ่มส่วนสำหรับ อุ การันต์ (นปุงสกลิงค์) ---
    else if (karantaType === 'u-napun') { // อุ การันต์, นปุงสกลิงค์
        const uNapunTransformingSuffixes = [
            "อุ", "อุํ", "อูนิ", "อู",
            "อุนา", "อูหิ", "อูภิ",
            "อุสฺส", "อุโน", "อูนํ",
            "อุสฺมา", "อุมฺหา",
            "อุสฺมึ", "อุมฺหิ", "อูสุ"
        ];
        // ตรวจสอบว่าอักขระสุดท้ายเป็น 'ุ' (สำหรับ อุ การันต์)
        if (uNapunTransformingSuffixes.includes(suffix) && lastCharNoun === 'ุ') {
            const baseWithoutU = noun.slice(0, -1); // เช่น 'จกฺขุ' -> 'จกฺข'

            // --- Special cases for U-Napun ---
            if (suffix === "อุ") { // ปฐมา/อาลปนะ เอกวจนะ
                return noun; // จกฺขุ + สิ = จกฺขุ (คงรูป)
            }
            else if (suffix === "อุํ") { // ทุติยา เอกวจนะ
                return baseWithoutU + 'ุํ'; // จกฺขุ + อํ = จกฺขุํ
            }
            // สำหรับพหุวจนะที่ลงท้ายด้วย อูนิ (ต้องทีฆะ อุ ก่อน)
            else if (suffix === "อูนิ") {
                return baseWithoutU + 'ูนิ';
            }
            // สำหรับพหุวจนะที่ลงท้ายด้วย อู (ต้องทีฆะ อุ ก่อน)
            else if (suffix === "อู") {
                return baseWithoutU + 'ู';
            }
            // สำหรับกรณีอื่นๆ
            else {
                return baseWithoutU + getTransformedEnding(lastCharNoun, suffix, karantaType, noun);
            }
        }
    }
    // --- สิ้นสุดส่วนที่เพิ่ม ---

    // Default fallback - this should ideally be hit only if no specific karantaType matches
    // or if the suffix does not cause a transformation handled above.
    return noun + suffix;
}


// Function to apply the declension rule to a noun for a given rule (vibhatti/vacana).
function applyDeclensionRule(noun, rule, karantaType) {
    let results = [];
    const suffixes = Array.isArray(rule.final_suffix) ? rule.final_suffix : [rule.final_suffix];

    suffixes.forEach(suffix => {
        let conjugatedForm = "";

        // --- Specific handling for base forms / special suffixes directly (ไม่ใช้ combineNounWithSuffix) ---
        // เป็นกรณีที่ logic ง่ายกว่า หรือมีลักษณะเฉพาะที่ไม่เข้ากับ pattern 'base + transformed_ending'

        // A-Karanta (ปุงลิงค์): ทุติยา เอกวจนะ (อํ -> ํ) - โจรํ
        if (karantaType === 'a-pungling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "ํ") {
            conjugatedForm = noun + 'ํ';
        }
        // I-Karanta (ปุงลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม) - มุนิ
        else if (karantaType === 'i-pungling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "") {
            conjugatedForm = noun;
        }
        // I-Karanta (ปุงลิงค์): ทุติยา เอกวจนะ (อํ -> ึ) - มุนึ
        else if (karantaType === 'i-pungling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "ํ") {
            conjugatedForm = noun.slice(0, -1) + 'ึ';
        }
        // E-Karanta (ปุงลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อี') - เสฏฺฐี
        else if (karantaType === 'e-pungling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อี") {
            conjugatedForm = noun;
        }
        // E-Karanta (ปุงลิงค์): อาลปนะ เอกวจนะ (สิ -> 'อิ') - เสฏฺฐิ
        else if (karantaType === 'e-pungling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun.slice(0, -1) + 'ิ';
        }
        // U-Karanta (ปุงลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - ครุ
        else if (karantaType === 'u-pungling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // Uu-Karanta (ปุงลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อู') - วิญฺญู
        else if (karantaType === 'oo-pungling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อู") {
            conjugatedForm = noun;
        }
        // Uu-Karanta (ปุงลิงค์): ทุติยา เอกวจนะ (อํ -> 'อุํ') - วิญฺญุํ
        else if (karantaType === 'oo-pungling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อุํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุํ';
        }
        // Uu-Karanta (ปุงลิงค์): อาลปนะ เอกวจนะ (สิ -> 'อุ') - วิญฺญุ
        else if (karantaType === 'oo-pungling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun.slice(0, -1) + 'ุ';
        }
        // Aa-Karanta (อิตถีลิงค์): ทุติยา เอกวจนะ (อา+อํ = 'ํ') - กญฺญํ
        else if (karantaType === 'aa-itthiling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "ํ") {
            conjugatedForm = noun.slice(0, -1) + 'ํ';
        }
        // Aa-Karanta (อิตถีลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อา') - กญฺญา
        else if (karantaType === 'aa-itthiling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อา") {
            conjugatedForm = noun;
        }
        // --- ส่วนที่แก้ไขสำหรับ อิ การันต์ (อิตถีลิงค์) ---
        // I-Itthiling (อิตถีลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อิ') - รตฺติ
        else if (karantaType === 'i-itthiling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun;
        }
        // I-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อิ') - รตฺติ
        else if (karantaType === 'i-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun;
        }
        // I-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อิ') - รตฺติ
        else if (karantaType === 'i-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun;
        }
        // --- เพิ่มส่วนสำหรับ อี การันต์ (อิตถีลิงค์) ---
        // E-Itthiling (อิตถีลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อี') - นารี
        else if (karantaType === 'e-itthiling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อี") {
            conjugatedForm = noun;
        }
        // E-Itthiling (อิตถีลิงค์): ทุติยา เอกวจนะ (อํ -> 'อิํ') - นาริํ
        else if (karantaType === 'e-itthiling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อิํ") { // **แก้ไข suffix**
            conjugatedForm = noun.slice(0, -1) + 'ิํ';
        }
        // E-Itthiling (อิตถีลิงค์): ทุติยา เอกวจนะ (อํ -> 'อิยํ') - นาริยํ
        else if (karantaType === 'e-itthiling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อิยํ") { // **เพิ่มบล็อกนี้**
            conjugatedForm = noun.slice(0, -1) + 'ิยํ';
        }
        // E-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> 'อิ') - นาริ
        else if (karantaType === 'e-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun.slice(0, -1) + 'ิ';
        }
        // U-Itthiling (อิตถีลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - รชฺชุ
        else if (karantaType === 'u-itthiling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // U-Itthiling (อิตถีลิงค์): ทุติยา เอกวจนะ (อํ -> 'อุํ') - รชฺชุํ
        else if (karantaType === 'u-itthiling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อุํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุํ';
        }
        // U-Itthiling (อิตถีลิงค์): สัตตมี เอกวจนะ (สฺมึ -> 'อุยํ') - รชฺชุยํ
        else if (karantaType === 'u-itthiling' && rule.vibhatti === "สัตตมี" && rule.vacana === "เอกวจนะ" && suffix === "อุยํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุยํ';
        }
        // U-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - รชฺชุ
        else if (karantaType === 'u-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // U-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - รชฺชุ
        else if (karantaType === 'u-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // --- เพิ่มส่วนสำหรับ อู การันต์ (อิตถีลิงค์) ---
        // Oo-Itthiling (อิตถีลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อู') - วธู
        else if (karantaType === 'oo-itthiling' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อู") {
            conjugatedForm = noun;
        }
        // Oo-Itthiling (อิตถีลิงค์): ทุติยา เอกวจนะ (อํ -> 'อุํ') - วธุํ
        else if (karantaType === 'oo-itthiling' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อุํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุํ';
        }
        // Oo-Itthiling (อิตถีลิงค์): อาลปนะ เอกวจนะ (สิ -> 'อุ') - วธุ
        else if (karantaType === 'oo-itthiling' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun.slice(0, -1) + 'ุ';
        }
        // Oo-Itthiling (อิตถีลิงค์): เอกวจนะ ทั่วไปที่ลงท้ายด้วย 'ยา' (ตติยา, จตุตถี, ปัญจมี, ฉัฏฐี)
        else if (karantaType === 'oo-itthiling' && (rule.vibhatti === "ตติยา" || rule.vibhatti === "จตุตถี" || rule.vibhatti === "ปัญจมี" || rule.vibhatti === "ฉัฏฐี") && rule.vacana === "เอกวจนะ" && suffix === "อุยา") {
            conjugatedForm = noun.slice(0, -1) + 'ุยา';
        }
        // Oo-Itthiling (อิตถีลิงค์): สัตตมี เอกวจนะ (สฺมึ -> 'อุยํ') - วธุยํ
        else if (karantaType === 'oo-itthiling' && rule.vibhatti === "สัตตมี" && rule.vacana === "เอกวจนะ" && suffix === "อุยํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุยํ';
        }
        // A-Napun (นปุงสกลิงค์): ปฐมา เอกวจนะ (สิ -> 'ํ') - กุลํ
        else if (karantaType === 'a-napun' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "ํ") {
            conjugatedForm = noun + 'ํ';
        }
        // A-Napun (นปุงสกลิงค์): ทุติยา เอกวจนะ (อํ -> 'ํ') - กุลํ
        else if (karantaType === 'a-napun' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "ํ") {
            conjugatedForm = noun + 'ํ';
        }
        // --- เพิ่มส่วนสำหรับ อิ การันต์ (นปุงสกลิงค์) ---
        // I-Napun (นปุงสกลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อิ') - อตฺถิ
        else if (karantaType === 'i-napun' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun;
        }
        // I-Napun (นปุงสกลิงค์): ทุติยา เอกวจนะ (อํ -> 'ึ') - อตฺถึ
        else if (karantaType === 'i-napun' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "ึ") {
            conjugatedForm = noun.slice(0, -1) + 'ึ';
        }
        // I-Napun (นปุงสกลิงค์): ปฐมา/ทุติยา/อาลปนะ พหุวจนะ (โย -> 'อีนิ') - อตฺถีนิ
        else if (karantaType === 'i-napun' && (rule.vibhatti === "ปฐมา" || rule.vibhatti === "ทุติยา" || rule.vibhatti === "อาลปนะ") && rule.vacana === "พหุวจนะ" && suffix === "อีนิ") {
            conjugatedForm = noun.slice(0, -1) + 'ีนิ';
        }
        // I-Napun (นปุงสกลิงค์): ปฐมา/ทุติยา/อาลปนะ พหุวจนะ (โย -> 'อี') - อตฺถี
        else if (karantaType === 'i-napun' && (rule.vibhatti === "ปฐมา" || rule.vibhatti === "ทุติยา" || rule.vibhatti === "อาลปนะ") && rule.vacana === "พหุวจนะ" && suffix === "อี") {
            conjugatedForm = noun.slice(0, -1) + 'ี';
        }
        // I-Napun (นปุงสกลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อิ') - อตฺถิ
        else if (karantaType === 'i-napun' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อิ") {
            conjugatedForm = noun;
        }
        // --- เพิ่มส่วนสำหรับ อุ การันต์ (นปุงสกลิงค์) ---
        // U-Napun (นปุงสกลิงค์): ปฐมา เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - จกฺขุ
        else if (karantaType === 'u-napun' && rule.vibhatti === "ปฐมา" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // U-Napun (นปุงสกลิงค์): ทุติยา เอกวจนะ (อํ -> 'อุํ') - จกฺขุํ
        else if (karantaType === 'u-napun' && rule.vibhatti === "ทุติยา" && rule.vacana === "เอกวจนะ" && suffix === "อุํ") {
            conjugatedForm = noun.slice(0, -1) + 'ุํ';
        }
        // U-Napun (นปุงสกลิงค์): ปฐมา/ทุติยา/อาลปนะ พหุวจนะ (โย -> 'อูนิ') - จกฺขูนิ
        else if (karantaType === 'u-napun' && (rule.vibhatti === "ปฐมา" || rule.vibhatti === "ทุติยา" || rule.vibhatti === "อาลปนะ") && rule.vacana === "พหุวจนะ" && suffix === "อูนิ") {
            conjugatedForm = noun.slice(0, -1) + 'ูนิ';
        }
        // U-Napun (นปุงสกลิงค์): ปฐมา/ทุติยา/อาลปนะ พหุวจนะ (โย -> 'อู') - จกฺขู
        else if (karantaType === 'u-napun' && (rule.vibhatti === "ปฐมา" || rule.vibhatti === "ทุติยา" || rule.vibhatti === "อาลปนะ") && rule.vacana === "พหุวจนะ" && suffix === "อู") {
            conjugatedForm = noun.slice(0, -1) + 'ู';
        }
        // U-Napun (นปุงสกลิงค์): อาลปนะ เอกวจนะ (สิ -> คงรูปเดิม 'อุ') - จกฺขุ
        else if (karantaType === 'u-napun' && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && suffix === "อุ") {
            conjugatedForm = noun;
        }
        // --- สิ้นสุดส่วนที่เพิ่ม ---

        // General Fallback for อาลปนะ เอกวจนะ (final_suffix = "")
        // ควรเป็น else if สุดท้ายก่อน else หลัก เพื่อให้แน่ใจว่ากรณีเฉพาะด้านบนถูกจัดการก่อน
        else if (suffix === "" && rule.vibhatti === "อาลปนะ" && rule.vacana === "เอกวจนะ" && (rule.suffix_orig === "สิ" || rule.suffix_orig === "อํ" || rule.suffix_orig === "โย")) {
            conjugatedForm = noun;
        }
        // --- End specific handling ---
        else {
            // สำหรับกรณีอื่นๆ ทั้งหมด ใช้ combineNounWithSuffix
            conjugatedForm = combineNounWithSuffix(noun, suffix, rule, karantaType);
        }
        results.push(conjugatedForm);
    });
    return results;
}

// Function to display Karaka explanation (No change)
function displayKarakaExplanation(vibhattiName, karakaText) {
    const detailedExplanationDiv = document.getElementById('detailedExplanation');
    const detailContent = document.getElementById('detailContent');
    detailedExplanationDiv.style.display = 'block';
    detailContent.innerHTML = `<h3>${vibhattiName}วิภัตติ:</h3><p>ทำหน้าที่เป็น <b>${karakaText}</b></p>`;
}

// Formats the raw meaning based on vibhatti and vacana for display (No change)
function formatMeaningForDisplay(rawMeaning, vibhattiName, vacana, userMeaning = null) {
    let baseFormattedMeaning = rawMeaning;

    if (vibhattiName === "ปฐมา" && baseFormattedMeaning.startsWith("อ.")) {
        baseFormattedMeaning = baseFormattedMeaning.replace("อ.", "อ. (อันว่า)");
    }

    if (vacana === "พหุวจนะ") {
        baseFormattedMeaning = baseFormattedMeaning.split(', ').map(part => {
            if (part.startsWith("อ. (อันว่า)")) {
                return part + '... ท.';
            }
            return part + '... ท.';
        }).join(', ');
    }

    let finalFormattedMeaning = baseFormattedMeaning;

    if (userMeaning) {
        if (vacana === "เอกวจนะ") {
            if (vibhattiName === "ปฐมา") {
                finalFormattedMeaning = baseFormattedMeaning.replace("อ. (อันว่า)", `อ. (อันว่า) ${userMeaning}`);
            } else {
                finalFormattedMeaning = rawMeaning.split(', ').map(p => `${p}${userMeaning}`).join(', ');
            }
        } else { // พหุวจนะ
            finalFormattedMeaning = rawMeaning.split(', ').map(p => {
                if (vibhattiName === "ปฐมา" && p.startsWith("อ.")) {
                    return `อ. (อันว่า) ${userMeaning} ท.`;
                }
                return `${p}${userMeaning} ท.`;
            }).join(', ');
        }
    }
    return finalFormattedMeaning;
}


// Function to generate the detailed explanation for a specific form (used when clicking on result in Table 3) (No change except originalRule passing)
function getDetailedExplanation(noun, vibhatti, vacana, clickedForm, karantaType, meaning) {
    const rule = declensionRules[karantaType][vibhatti][vacana];
    const vibhattiRule = declensionRules[karantaType][vibhatti];
    if (!rule || !vibhattiRule) {
        return "ไม่พบข้อมูลสำหรับรูปแบบนี้";
    }

    let explanation = `<b>${clickedForm}</b>: ศัพท์เดิมมาจาก <b>${noun}</b>`;

    let karantaText = "";
    let lingkaText = "";
    if (karantaType.startsWith('a-')) { karantaText = "อ การันต์"; }
    else if (karantaType.startsWith('i-')) { karantaText = "อิ การันต์"; }
    else if (karantaType.startsWith('e-')) { karantaText = "อี การันต์"; }
    else if (karantaType.startsWith('u-')) { karantaText = "อุ การันต์"; }
    else if (karantaType.startsWith('oo-')) { karantaText = "อู การันต์"; }
    else if (karantaType.startsWith('aa-')) { karantaText = "อา การันต์"; }

    if (karantaType.endsWith('-pungling')) { lingkaText = "ปุงลิงค์"; }
    else if (karantaType.endsWith('-itthiling')) { lingkaText = "อิตถีลิงค์"; }
    else if (karantaType.endsWith('-napun')) { lingkaText = "นปุงสกลิงค์"; }

    explanation += ` เป็น ${karantaText} ใน${lingkaText} ลง ${rule.suffix_orig} ${vibhatti}วิภัตติ ฝ่าย${vacana}`;

    let specificProcessExplanation = "";
    const allExplanationParts = (rule.explanation_general || '').split(' / ');
    const possibleSuffixes = Array.isArray(rule.final_suffix) ? rule.final_suffix : [rule.final_suffix];

    for (let i = 0; i < possibleSuffixes.length; i++) {
        const currentSuffix = possibleSuffixes[i];
        const simulatedRule = {
            suffix_orig: rule.suffix_orig,
            final_suffix: [currentSuffix],
            vibhatti: rule.vibhatti,
            vacana: rule.vacana
        };
        const expectedForms = applyDeclensionRule(noun, simulatedRule, karantaType);

        if (expectedForms.includes(clickedForm)) {
            specificProcessExplanation = allExplanationParts[i] || "";
            break;
        }
    }

    if (!specificProcessExplanation) {
        specificProcessExplanation = rule.explanation_general;
    }

    specificProcessExplanation = specificProcessExplanation.split(' / ').join('<br>');

    explanation += `, ${specificProcessExplanation} สำเร็จรูปเป็น ${clickedForm} ๆ แปลว่า ${formatMeaningForDisplay(rule.meaning, vibhatti, vacana, meaning)}`;

    return explanation;
}

// Function to update the main formula and explanation tables (used in a-pungling.html etc.)
function updateMainTables(noun, karantaType) {
    const rules = declensionRules[karantaType];
    const formulaTableBody = document.querySelector('#formulaTable tbody');
    const explanationTableBody = document.querySelector('#explanationTable tbody');
    const formulaTableTitle = document.getElementById('formulaTableTitle');
    const explanationTableTitle = document.getElementById('explanationTableTitle');
    const detailedExplanationDiv = document.getElementById('detailedExplanation');

    formulaTableBody.innerHTML = '';
    detailedExplanationDiv.style.display = 'none';

    const isExplanationTableAlreadyRendered = explanationTableBody.dataset.rendered === 'true';
    if (!isExplanationTableAlreadyRendered) {
        explanationTableBody.innerHTML = '';
    }

    // Update table titles
    if (noun) {
        formulaTableTitle.textContent = `ตารางที่ 1: แสดงสูตรทำตัว (สำหรับศัพท์ "${noun}")`;
        explanationTableTitle.textContent = 'ตารางที่ 2: คำอธิบายการทำตัว';
    } else {
        formulaTableTitle.textContent = 'ตารางที่ 1: แสดงสูตรทำตัว (ทั่วไป)';
        explanationTableTitle.textContent = 'ตารางที่ 2: คำอธิบายการทำตัว';
    }

    for (const vibhattiName in rules) {
        const vibhattiRule = rules[vibhattiName];

        // --- DEBUGGING CHECK: Ensure rule data is complete ---
        if (!vibhattiRule || !vibhattiRule["เอกวจนะ"] || !vibhattiRule["พหุวจนะ"]) {
            console.error(`Error: Missing or incomplete rule data for vibhatti: '${vibhattiName}' under karantaType: '${karantaType}'. Please check declension-rules.js.`);
            const errorRowFormula = formulaTableBody.insertRow();
            errorRowFormula.insertCell().textContent = vibhattiName;
            errorRowFormula.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
            errorRowFormula.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";

            if (!isExplanationTableAlreadyRendered) {
                const errorRowExplanation = explanationTableBody.insertRow();
                errorRowExplanation.insertCell().textContent = vibhattiName;
                errorRowExplanation.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
                errorRowExplanation.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
            }
            continue;
        }
        // --- END DEBUGGING CHECK ---

        // --- Rendering Table 1 (Formula) ---
        const rowFormula = formulaTableBody.insertRow();
        const vibhattiCellFormula = rowFormula.insertCell();
        vibhattiCellFormula.innerHTML = `<span class="clickable-vibhatti" data-vibhatti="${vibhattiName}" data-karaka="${vibhattiRule.karaka}">${vibhattiName}</span>`;

        const ekavachanaCellFormula = rowFormula.insertCell();
        const bahuvachanaCellFormula = rowFormula.insertCell();

        if (noun) {
            // Determine if 'ฺอ' should be added for display for A-Karanta
            const nounHasImplicitVowelDisplay = (karantaType.startsWith('a-')) && paliConsonants.includes(noun.slice(-1));
            // Determine if 'ฺ' + last vowel should be added for display for Vowel-Karantas (มุนฺอิ)
            const nounHasExplicitVowelDisplay = (karantaType.startsWith('i-') || karantaType.startsWith('e-') || karantaType.startsWith('u-') || karantaType.startsWith('oo-') || karantaType.startsWith('aa-') || karantaType.startsWith('i-itthiling')) && ['ิ', 'ี', 'ุ', 'ู', 'า'].includes(noun.slice(-1));

            let currentNounStemForFormula;
            if (nounHasImplicitVowelDisplay) { // A-Karanta (โจรฺอ)
                currentNounStemForFormula = noun + 'ฺอ';
            } else if (nounHasExplicitVowelDisplay) { // Vowel Karanta (มุนฺอิ, รตฺติอิ)
                currentNounStemForFormula = noun.slice(0, -1) + 'ฺอ' + noun.slice(-1);
            } else { // Default (e.g. อา-การันต์ กญฺญา, หรือการันต์อื่นๆ ที่ไม่ต้องการ ฺอ/ฺสระ)
                currentNounStemForFormula = noun;
            }

            const appliedFormsEka = applyDeclensionRule(noun, vibhattiRule["เอกวจนะ"], karantaType);
            const ekaFormulaStrings = appliedFormsEka.map(form => `${currentNounStemForFormula}+${vibhattiRule["เอกวจนะ"].suffix_orig} = ${form}`);
            ekavachanaCellFormula.innerHTML = ekaFormulaStrings.join('<br>');

            if (noun === "พุทฺธ" && vibhattiName === "จตุตถี" && karantaType === 'a-pungling') {
                ekavachanaCellFormula.innerHTML = `${currentNounStemForFormula}+${vibhattiRule["เอกวจนะ"].suffix_orig} = พุทฺธสฺส<br>${currentNounStemForFormula}+${vibhattiRule["เอกวจนะ"].suffix_orig} = พุทฺธาย<br>${currentNounStemForFormula}+${vibhattiRule["เอกวจนะ"].suffix_orig} = พุทฺธตฺถํ`;
            }

            const appliedFormsBahu = applyDeclensionRule(noun, vibhattiRule["พหุวจนะ"], karantaType);
            const bahuFormulaStrings = appliedFormsBahu.map(form => `${currentNounStemForFormula}+${vibhattiRule["พหุวจนะ"].suffix_orig} = ${form}`);
            bahuvachanaCellFormula.innerHTML = bahuFormulaStrings.join('<br>');

        } else {
            ekavachanaCellFormula.innerHTML = (vibhattiRule["เอกวจนะ"]?.formula_general || '').split(' / ').join('<br>');
            bahuvachanaCellFormula.innerHTML = (vibhattiRule["พหุวจนะ"]?.formula_general || '').split(' / ').join('<br>');
        }

        // --- Rendering Table 2 (Explanation) - Only render once for general rules ---
        if (!isExplanationTableAlreadyRendered) {
            const ekaExplanationParts = (vibhattiRule["เอกวจนะ"]?.explanation_general || '').split(' / ');
            const bahuExplanationParts = (vibhattiRule["พหุวจนะ"]?.explanation_general || '').split(' / ');

            const maxParts = Math.max(ekaExplanationParts.length, bahuExplanationParts.length);

            for (let i = 0; i < maxParts; i++) {
                const currentExpRow = explanationTableBody.insertRow();

                const cellVibhatti = currentExpRow.insertCell();
                const cellEka = currentExpRow.insertCell();
                const cellBahu = currentExpRow.insertCell();

                if (i === 0) {
                    cellVibhatti.textContent = vibhattiName;
                } else {
                    cellVibhatti.textContent = '';
                }

                if (ekaExplanationParts[i] !== undefined) {
                    cellEka.innerHTML = `${vibhattiRule["เอกวจนะ"].suffix_orig} ${vibhattiName}วิภัตติ ฝ่ายเอกวจนะ ${ekaExplanationParts[i]}`;
                } else {
                    cellEka.textContent = '';
                }

                if (bahuExplanationParts[i] !== undefined) {
                    cellBahu.innerHTML = `${vibhattiRule["พหุวจนะ"].suffix_orig} ${vibhattiName}วิภัตติ ฝ่ายพหุวจนะ ${bahuExplanationParts[i]}`;
                } else {
                    cellBahu.textContent = '';
                }
            }
        }
    }

    if (!isExplanationTableAlreadyRendered) {
        explanationTableBody.dataset.rendered = 'true';
    }

    document.querySelectorAll('#formulaTable .clickable-vibhatti').forEach(span => {
        span.addEventListener('click', (event) => {
            const vibhatti = event.target.dataset.vibhatti;
            const karaka = event.target.dataset.karaka;
            displayKarakaExplanation(vibhatti, karaka);
        });
    });
}

// Function to render the result table (Table 3)
function renderResultTable(noun, karantaType) {
    const rules = declensionRules[karantaType];
    const resultTableBody = document.querySelector('#resultTable tbody');
    const resultSection = document.getElementById('resultSection');
    const detailedExplanationDiv = document.getElementById('detailedExplanation');

    resultTableBody.innerHTML = '';
    detailedExplanationDiv.style.display = 'none';
    detailedExplanationDiv.querySelector('#detailContent').innerHTML = '';
    resultSection.style.display = 'block';

    const meaning = document.getElementById('meaningInput').value.trim();

    for (const vibhatti in rules) {
        const vibhattiRule = rules[vibhatti];
        if (!vibhattiRule || !vibhattiRule["เอกวจนะ"] || !vibhattiRule["พหุวจนะ"]) {
            console.error(`Error: Incomplete rule data for result table, vibhatti: '${vibhatti}'`);
            continue;
        }

        const rowResult = resultTableBody.insertRow();
        rowResult.insertCell().textContent = vibhatti;

        const ruleEka = vibhattiRule["เอกวจนะ"];
        const appliedFormsEka = applyDeclensionRule(noun, ruleEka, karantaType);
        const ekavachanaResultCell = rowResult.insertCell();
        ekavachanaResultCell.innerHTML = appliedFormsEka.map(form => `<span class="clickable-form" data-vibhatti="${vibhatti}" data-vacana="เอกวจนะ" data-form="${form}">${form}</span>`).join('<br>');

        const ruleBahu = vibhattiRule["พหุวจนะ"];
        const appliedFormsBahu = applyDeclensionRule(noun, ruleBahu, karantaType);
        const bahuvacanaResultCell = rowResult.insertCell();
        bahuvacanaResultCell.innerHTML = appliedFormsBahu.map(form => `<span class="clickable-form" data-vibhatti="${vibhatti}" data-vacana="พหุวจนะ" data-form="${form}">${form}</span>`).join('<br>');
    }

    document.querySelectorAll('#resultTable .clickable-form').forEach(span => {
        span.addEventListener('click', (event) => {
            const vibhatti = event.target.dataset.vibhatti;
            const vacana = event.target.dataset.vacana;
            const form = event.target.dataset.form;
            const detailedText = getDetailedExplanation(noun, vibhatti, vacana, form, karantaType, meaning);
            document.getElementById('detailContent').innerHTML = detailedText;
            detailedExplanationDiv.style.display = 'block';
        });
    });
}

// Function to render general vibhatti and meaning tables on the index page
function renderIndexPageTables() {
    const rules = declensionRules["a-pungling"];

    const formulaTableBody = document.querySelector('#indexFormulaTable tbody');
    const explanationTableBody = document.querySelector('#indexExplanationTable tbody');
    const detailedExplanationDiv = document.getElementById('detailedExplanation');

    if (!formulaTableBody || !explanationTableBody) {
        console.warn("Element IDs for index tables not found. Skipping renderIndexPageTables.");
        return;
    }

    formulaTableBody.innerHTML = '';
    explanationTableBody.innerHTML = '';
    detailedExplanationDiv.style.display = 'none';

    for (const vibhattiName in rules) {
        const vibhattiRule = rules[vibhattiName];

        // --- DEBUGGING CHECK for index tables ---
        if (!vibhattiRule || !vibhattiRule["เอกวจนะ"] || !vibhattiRule["พหุวจนะ"]) {
            console.error(`Error: Missing or incomplete rule data for vibhatti: '${vibhattiName}' in declensionRules.js (for index page).`);
            const errorRowFormula = formulaTableBody.insertRow();
            errorRowFormula.insertCell().textContent = vibhattiName;
            errorRowFormula.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
            errorRowFormula.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";

            const errorRowExplanation = explanationTableBody.insertRow();
            errorRowExplanation.insertCell().textContent = vibhattiRule?.short_name || vibhattiName;
            errorRowExplanation.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
            errorRowExplanation.insertCell().textContent = "ข้อมูลไม่สมบูรณ์";
            continue;
        }
        // --- END DEBUGGING CHECK ---

        // --- Rendering Table 1 (Formula on Index) ---
        const rowFormula = formulaTableBody.insertRow();
        const vibhattiCellFormula = rowFormula.insertCell();
        vibhattiCellFormula.innerHTML = `<span class="clickable-vibhatti" data-vibhatti="${vibhattiName}" data-karaka="${vibhattiRule.karaka}">${vibhattiName}</span>`;

        rowFormula.insertCell().textContent = vibhattiRule["เอกวจนะ"]?.suffix_orig || '';
        rowFormula.insertCell().textContent = vibhattiRule["พหุวจนะ"]?.suffix_orig || '';

        // --- Rendering Table 2 (Meaning on Index) ---
        const rowExplanation = explanationTableBody.insertRow();
        const vibhattiCellExplanation = rowExplanation.insertCell();
        vibhattiCellExplanation.textContent = `${vibhattiRule.short_name}`;

        const ekavachanaMeaningCell = rowExplanation.insertCell();
        const bahuvacanaMeaningCell = rowExplanation.insertCell();

        ekavachanaMeaningCell.textContent = formatMeaningForDisplay(vibhattiRule["เอกวจนะ"].meaning, vibhattiName, "เอกวจนะ");
        bahuvacanaMeaningCell.textContent = formatMeaningForDisplay(vibhattiRule["พหุวจนะ"].meaning, vibhattiName, "พหุวจนะ");
    }

    document.querySelectorAll('#indexFormulaTable .clickable-vibhatti').forEach(span => {
        span.addEventListener('click', (event) => {
            const vibhatti = event.target.dataset.vibhatti;
            const karaka = event.target.dataset.karaka;
            displayKarakaExplanation(vibhatti, karaka);
        });
    });
}

// Initialization function for each declension page (e.g., a-pungling.html)
function initializePage(karantaType) {
    updateMainTables(null, karantaType);

    const declenseButton = document.getElementById('declenseButton');
    const nounInput = document.getElementById('nounInput');
    const meaningInput = document.getElementById('meaningInput');

    declenseButton.addEventListener('click', () => {
        const noun = nounInput.value.trim();
        const meaning = meaningInput.value.trim();

        if (!noun) {
            alert('กรุณาใส่ "ศัพท์เดิมบาลี" ที่ต้องการทำตัว');
            nounInput.focus();
            return;
        }
        if (!meaning) {
            alert('กรุณาใส่ "คำแปลไทย"');
            meaningInput.focus();
            return;
        }

        updateMainTables(noun, karantaType);
        renderResultTable(noun, karantaType);
    });

    nounInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            declenseButton.click();
        }
    });
    meaningInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            declenseButton.click();
        }
    });
}

// Call renderIndexPageTables if we are on index.html when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('indexFormulaTable') && document.getElementById('indexExplanationTable')) {
        renderIndexPageTables();
    }
});