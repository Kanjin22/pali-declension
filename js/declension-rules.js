// js/declension-rules.js

const declensionRules = {
    // --- อ การันต์ (A-Karanta) ---
    "a-pungling": { // อ การันต์, ปุงลิงค์ (เช่น พุทฺธ, โจร, อาจริย, บุริส)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อ+สิ = โอ", "explanation_general": "ลบ อ, แปลง สิ เป็น โอ", "final_suffix": "โอ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = อา", "explanation_general": "ลบ อ, แปลง โย เป็น อา", "final_suffix": "อา", "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อ+อํ = อํ", "explanation_general": "ลบ อ, คง อํ ไว้", "final_suffix": "ํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = เอ", "explanation_general": "ลบ อ, แปลง โย เป็น เอ", "final_suffix": "เอ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อ+นา = เอน", "explanation_general": "ลบ อ, แปลง นา เป็น เอน", "final_suffix": "เอน", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อ+หิ = เอหิ / อ+หิ = เอภิ", "explanation_general": "แปลง อ เป็น เอ, คง หิ ไว้ / แปลง อ เป็น เอ, แปลง หิ เป็น ภิ", "final_suffix": ["เอหิ", "เอภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อ+ส = อสฺส / อ+ส = อาย / อ+ส = อตฺถํ", "explanation_general": "ลง สฺ อาคม / ลบ อ, แปลง ส เป็น อาย / แปลง ส เป็น ตฺถํ", "final_suffix": ["อสฺส", "อาย", "อตฺถํ"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อ+นํ = อานํ", "explanation_general": "ทีฆะ อ เป็น อา, คง นํ ไว้", "final_suffix": "านํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อ+สฺมา = อสฺมา / อ+สฺมา = อมฺหา / อ+สฺมา = อา", "explanation_general": "คง สฺมา ไว้ / แปลง สฺมา เป็น มฺหา / ลบ อ, แปลง สฺมา เป็น อา", "final_suffix": ["อสฺมา", "อมฺหา", "อา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อ+หิ = เอหิ / อ+หิ = เอภิ", "explanation_general": "แปลง อ เป็น เอ, คง หิ ไว้ / แปลง อ เป็น เอ, แปลง หิ เป็น ภิ", "final_suffix": ["เอหิ", "เอภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อ+ส = อสฺส", "explanation_general": "ลง สฺ อาคม", "final_suffix": "อสฺส", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อ+นํ = อานํ", "explanation_general": "ทีฆะ อ เป็น อา, คง นํ ไว้", "final_suffix": "านํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อ+สฺมิํ = อสฺมิํ / อ+สฺมิํ = อมฺหิ / อ+สฺมิํ = เอ", "explanation_general": "คง สฺมิํ ไว้ / แปลง สฺมิํ เป็น มฺหิ / ลบ อ, แปลง สฺมิํ เป็น เอ", "final_suffix": ["อสฺมิํ", "อมฺหิ", "เอ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อ+สุ = เอสุ", "explanation_general": "แปลง อ เป็น เอ, คง สุ ไว้", "final_suffix": "เอสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อ+สิ = อ", "explanation_general": "ลบ สิ", "final_suffix": "", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = อา", "explanation_general": "ลบ อ, แปลง โย เป็น อา", "final_suffix": "อา", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อิ การันต์ (I-Karanta) ---
    "i-pungling": { // อิ การันต์, ปุงลิงค์ (เช่น มุนิ, อคฺคิ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อโย / อิ+โย = อี", "explanation_general": "แปลง อิ เป็น อ, คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อโย", "อี"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อิ+อํ = อิํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "อิํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }, // **คง อิํ ตามที่เคยแก้ไข**
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อโย / อิ+โย = อี", "explanation_general": "แปลง อิ เป็น อ, คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อโย", "อี"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อิ+นา = อินา", "explanation_general": "คง นา ไว้", "final_suffix": "อินา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิสฺส / อิ+ส = อิโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "ทีฆะ อิ เป็น อี, คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อิ+สฺมา = อิสฺมา / อิ+สฺมา = อิมฺหา", "explanation_general": "คง สฺมา ไว้ / แปลง สฺมา เป็น มฺหา", "final_suffix": ["อิสฺมา", "อิมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิสฺส / อิ+ส = อิโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "ทีฆะ อิ เป็น อี, คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อิ+สฺมิํ = อิสฺมิํ / อิ+สฺมิํ = อิมฺหิ", "explanation_general": "คง สฺมิํ ไว้ / แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อิสฺมิํ", "อิมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }, // มักใช้ อิสฺมิํ, อิมฺหิ
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อิ+สุ = อีสุ", "explanation_general": "แปลง อิ เป็น อ, คง สุ ไว้", "final_suffix": "อีสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " } // มุนีสุ
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อโย / อิ+โย = อี", "explanation_general": "แปลง อิ เป็น อ, คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อโย", "อี"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อี การันต์ (E-Karanta) ---
    "e-pungling": { // อี การันต์, ปุงลิงค์ (เช่น เสฏฺฐี, กรี)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อี+สิ = อี", "explanation_general": "ลบ สิ", "final_suffix": "อี", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโน / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อิโน", "อี"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อี+อํ = อิํ / อี+อํ = อินํ", "explanation_general": "รัสสะ อี เป็น อิ, แปลง อํ เป็นนิคคหิต / รัสสะ อี เป็น อิ, แปลง อํ เป็น นํ", "final_suffix": ["ํ", "อินํ"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโน / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อิโน", "อี"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อี+นา = อินา", "explanation_general": "รัสสะ อี เป็น อิ, คง นา ไว้", "final_suffix": "อินา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อี+หิ = อีหิ / อี+หิ = อีภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อี+ส = อิสฺส / อี+ส = อิโน", "explanation_general": "รัสสะ อี เป็น อิ, ลง สฺ อาคม / รัสสะ อี เป็น อิ, แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อี+นํ = อีนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อี+สฺมา = อิสฺมา / อี+สฺมา = อิมฺหา", "explanation_general": "รัสสะ อี เป็น อิ, คง สฺมา ไว้ / รัสสะ อี เป็น อิ, แปลง สฺมา เป็น มฺหา", "final_suffix": ["อิสฺมา", "อิมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อี+หิ = อีหิ / อี+หิ = อีภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อี+ส = อิสฺส / อี+ส = อิโน", "explanation_general": "รัสสะ อี เป็น อิ, ลง สฺ อาคม / รัสสะ อี เป็น อิ, แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อี+นํ = อีนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อี+สฺมิํ = อิสฺมิํ / อี+สฺมิํ = อิมฺหิ", "explanation_general": "รัสสะ อี เป็น อิ, คง สฺมิํ ไว้ / รัสสะ อี เป็น อิ, แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อิสฺมิํ", "อิมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อี+สุ = อีสุ", "explanation_general": "คง สุ ไว้", "final_suffix": "อีสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อี+สิ = อิ", "explanation_general": "รัสสะ อี เป็น อิ, ลบ สิ", "final_suffix": "อิ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโน / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อิโน", "อี"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อุ การันต์ (U-Karanta) ---
    "u-pungling": { // อุ การันต์, ปุงลิงค์ (เช่น ครุ, ภิกขุ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อโว / อุ+โย = อู", "explanation_general": "แปลง อุ เป็น อ, แปลง โย เป็น โว / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อโว", "อู"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อุ+อํ = อุํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "อุํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อโว / อุ+โย = อู", "explanation_general": "แปลง อุ เป็น อ, แปลง โย เป็น โว / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อโว", "อู"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อุ+นา = อุนา", "explanation_general": "คง นา ไว้", "final_suffix": "อุนา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุสฺส / อุ+ส = อุโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อุ+สฺมา = อุสฺมา / อุ+สฺมา = อุมฺหา", "explanation_general": "คง สฺมา ไว้ / แปลง สฺมา เป็น มฺหา", "final_suffix": ["อุสฺมา", "อุมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุสฺส / อุ+ส = อุโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อุ+สฺมิํ = อุสฺมิํ / อุ+สฺมิํ = อุมฺหิ", "explanation_general": "คง สฺมิํ ไว้ / แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อุสฺมิํ", "อุมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อุ+สุ = อูสุ", "explanation_general": "ทีฆะ อุ เป็น อู, คง สุ ไว้", "final_suffix": "อูสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อเว / อุ+โย = อโว", "explanation_general": "แปลง อุ เป็น อ, แปลง โย เป็น เว / แปลง อุ เป็น อ, แปลง โย เป็น โว", "final_suffix": ["อเว", "อโว"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อู การันต์ (oo-Karanta) ---
    "oo-pungling": { // อู การันต์, ปุงลิงค์ (เช่น วิญฺญู, วิทู)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อู+สิ = อู", "explanation_general": "ลบ สิ", "final_suffix": "อู", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโน / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อุโน", "อู"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อู+อํ = อุํ", "explanation_general": "รัสสะ อู เป็น อุ, แปลง อํ เป็นนิคคหิต", "final_suffix": "อุํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโน / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อุโน", "อู"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อู+นา = อุนา", "explanation_general": "รัสสะ อู เป็น อุ, คง นา ไว้", "final_suffix": "อุนา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อู+หิ = อูหิ / อู+หิ = อูภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อู+ส = อุสฺส / อู+ส = อุโน", "explanation_general": "รัสสะ อู เป็น อุ, ลง สฺ อาคม / รัสสะ อู เป็น อุ, แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อู+นํ = อูนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อู+สฺมา = อุสฺมา / อู+สฺมา = อุมฺหา", "explanation_general": "รัสสะ อู เป็น อุ, คง สฺมา ไว้ / รัสสะ อู เป็น อุ, แปลง สฺมา เป็น มฺหา", "final_suffix": ["อุสฺมา", "อุมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อู+หิ = อูหิ / อู+หิ = อูภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อู+ส = อุสฺส / อู+ส = อุโน", "explanation_general": "รัสสะ อู เป็น อุ, ลง สฺ อาคม / รัสสะ อู เป็น อุ, แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อู+นํ = อูนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อู+สฺมิํ = อุสฺมิํ / อู+สฺมิํ = อุมฺหิ", "explanation_general": "รัสสะ อู เป็น อุ, คง สฺมิํ ไว้ / รัสสะ อู เป็น อุ, แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อุสฺมิํ", "อุมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อู+สุ = อูสุ", "explanation_general": "คง สุ ไว้", "final_suffix": "อูสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อู+สิ = อุ", "explanation_general": "รัสสะ อู เป็น อุ, ลบ สิ", "final_suffix": "อุ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโน / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, แปลง โย เป็น โน / ลบ โย", "final_suffix": ["อุโน", "อู"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อา การันต์ (Aa-Karanta) ---
    "aa-itthiling": { // อา การันต์, อิตถีลิงค์ (เช่น กญฺญา, ตารา)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อา+สิ = อา", "explanation_general": "ลบ สิ", "final_suffix": "อา", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อา+โย = อาโย / อา+โย = อา", "explanation_general": "คง โย ไว้ / ลบ โย", "final_suffix": ["อาโย", "อา"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อา+อํ = อํ", "explanation_general": "ลบ อา, คง อํ ไว้", "final_suffix": "ํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อา+โย = อาโย / อา+โย = อา", "explanation_general": "คง โย ไว้ / ลบ โย", "final_suffix": ["อาโย", "อา"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อา+นา = อาย", "explanation_general": "ลบ อา, แปลง นา เป็น อาย", "final_suffix": "อาย", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อา+หิ = อาหิ / อา+หิ = อาภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อาหิ", "อาภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อา+ส = อาย", "explanation_general": "ลบ อา, แปลง ส เป็น อาย", "final_suffix": "อาย", "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อา+นํ = อานํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อานํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อา+สฺมา = อาย", "explanation_general": "ลบ อา, แปลง สฺมา เป็น อาย", "final_suffix": "อาย", "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อา+หิ = อาหิ / อา+หิ = อาภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อาหิ", "อาภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อา+ส = อาย", "explanation_general": "ลบ อา, แปลง ส เป็น อาย", "final_suffix": "อาย", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อา+นํ = อานํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อานํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อา+สฺมิํ = อาย / อา+สฺมิํ = อายํ", "explanation_general": "ลบ อา, แปลง สฺมิํ เป็น อาย / แปลง สฺมิํ เป็น ยํ", "final_suffix": ["อาย", "อายํ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อา+สุ = อาสุ", "explanation_general": "คง สุ ไว้", "final_suffix": "อาสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อา+สิ = เอ", "explanation_general": "ลบ อา, แปลง สิ เป็น เอ", "final_suffix": "เอ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อา+โย = อาโย / อา+โย = อา", "explanation_general": "คง โย ไว้ / ลบ โย", "final_suffix": ["อาโย", "อา"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อิ การันต์ (I-Karanta) ---
    "i-itthiling": { // อิ การันต์, อิตถีลิงค์ (เช่น รตฺติ, ภูมิ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "อิ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อิโย / อิ+โย = อี", "explanation_general": "คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อิ+อํ = อิํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "อิํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อิโย / อิ+โย = อี", "explanation_general": "คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อิ+นา = อิยา", "explanation_general": "แปลง นา เป็น ยา", "final_suffix": "อิยา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิยา", "explanation_general": "แปลง ส เป็น ยา", "final_suffix": "อิยา", "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อิ+สฺมา = อิยา / อิ+สฺมา = ยา", "explanation_general": "แปลง สฺมา เป็น ยา / แปลง อิ เป็น ยฺ (ลบพยัญชนะที่มีรูปเหมือนกัน), แปลง สฺมา เป็น อา", "final_suffix": ["อิยา", "ฺยา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิยา", "explanation_general": "แปลง ส เป็น ยา", "final_suffix": "อิยา", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "ทีฆะ อิ เป็น อี, คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อิ+สฺมิํ = อิยา / อิ+สฺมิํ = อิยํ / อิ+สฺมิํ = ยํ", "explanation_general": "แปลง สฺมิํ เป็น ยา / แปลง สฺมิํ เป็น ยํ / แปลง อิ เป็น ยฺ (ลบพยัญชนะที่มีรูปเหมือนกัน), แปลง สฺมิํ เป็น อํ", "final_suffix": ["อิยา", "อิยํ", "ฺยํ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อิ+สุ = อีสุ", "explanation_general": "ทีฆะ อิ เป็น อี, คง สุ ไว้", "final_suffix": "อีสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "อิ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อิโย / อิ+โย = อี", "explanation_general": "คง โย ไว้ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อี การันต์ (E-Karanta) ---
    "e-itthiling": { // อี การันต์, อิตถีลิงค์ (เช่น นารี, กุมารี)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อี+สิ = อี", "explanation_general": "ลบ สิ", "final_suffix": "อี", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโย / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, คง โย ไว้ / ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อี+อํ = อิํ / อี+อํ = อิยํ", "explanation_general": "รัสสะ อี เป็น อิ, แปลง อํ เป็นนิคคหิต / รัสสะ อี เป็น อิ, แปลง อํ เป็น ยํ", "final_suffix": ["อิํ", "อิยํ"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโย / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, คง โย ไว้ / ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อี+นา = อิยา", "explanation_general": "รัสสะ อี เป็น อิ, แปลง นา เป็น ยา", "final_suffix": "อิยา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อี+หิ = อีหิ / อี+หิ = อีภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อี+ส = อิยา", "explanation_general": "รัสสะ อี เป็น อิ, แปลง ส เป็น ยา", "final_suffix": "อิยา", "meaning": "แก่, เพื่อ, ต่อ" }, // ลบ / อี+ส = อิสฺสา, final_suffix: ["อิยา", "อิสฺสา"]
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อี+นํ = อีนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อี+สฺมา = อิยา", "explanation_general": "รัสสะ อี เป็น อิ, แปลง สฺมา เป็น ยา", "final_suffix": "อิยา", "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อี+หิ = อีหิ / อี+หิ = อีภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อี+ส = อิยา", "explanation_general": "รัสสะ อี เป็น อิ, แปลง ส เป็น ยา", "final_suffix": "อิยา", "meaning": "แห่ง, ของ, เมื่อ" }, // ลบ / อี+ส = อิสฺสา, final_suffix: ["อิยา", "อิสฺสา"]
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อี+นํ = อีนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อี+สฺมิํ = อิยา / อี+สฺมิํ = อิยํ", "explanation_general": "รัสสะ อี เป็น อิ, แปลง สฺมิํ เป็น ยา / รัสสะ อี เป็น อิ, แปลง สฺมิํ เป็น ยํ", "final_suffix": ["อิยา", "อิยํ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อี+สุ = อีสุ", "explanation_general": "คง สุ ไว้", "final_suffix": "อีสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อี+สิ = อิ", "explanation_general": "รัสสะ อี เป็น อิ, ลบ สิ", "final_suffix": "อิ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อี+โย = อิโย / อี+โย = อี", "explanation_general": "รัสสะ อี เป็น อิ, คง โย ไว้ / ลบ โย", "final_suffix": ["อิโย", "อี"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อุ การันต์ (U-Karanta) ---
    "u-itthiling": { // อุ การันต์, อิตถีลิงค์ (เช่น รชฺชุ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อุโย / อุ+โย = อู", "explanation_general": "คง โย ไว้ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อุ+อํ = อุํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "อุํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อุโย / อุ+โย = อู", "explanation_general": "คง โย ไว้ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อุ+นา = อุยา", "explanation_general": "แปลง นา เป็น ยา", "final_suffix": "อุยา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุยา", "explanation_general": "แปลง ส เป็น ยา", "final_suffix": "อุยา", "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อุ+สฺมา = อุยา", "explanation_general": "แปลง สฺมา เป็น ยา", "final_suffix": "อุยา", "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุยา", "explanation_general": "แปลง ส เป็น ยา", "final_suffix": "อุยา", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อุ+สฺมิํ = อุยา / อุ+สฺมิํ = อุยํ", "explanation_general": "แปลง สฺมิํ เป็น ยา / แปลง สฺมิํ เป็น ยํ", "final_suffix": ["อุยา", "อุยํ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อุ+สุ = อูสุ", "explanation_general": "ทีฆะ อุ เป็น อู, คง สุ ไว้", "final_suffix": "อูสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อุโย / อุ+โย = อู", "explanation_general": "คง โย ไว้ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อู การันต์ (Oo-Karanta) ---
    "oo-itthiling": { // อู การันต์, อิตถีลิงค์ (เช่น วธู, ภิกขุนี, (สำหรับ วธู เป็นทั้ง อุ และ อู การันต์))
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อู+สิ = อู", "explanation_general": "ลบ สิ", "final_suffix": "อู", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโย / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, คง โย ไว้ / ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อู+อํ = อุํ", "explanation_general": "รัสสะ อู เป็น อุ, แปลง อํ เป็นนิคคหิต", "final_suffix": "อุํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโย / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, คง โย ไว้ / ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อู+นา = อุยา", "explanation_general": "รัสสะ อู เป็น อุ, แปลง นา เป็น ยา", "final_suffix": "อุยา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อู+หิ = อูหิ / อู+หิ = อูภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อู+ส = อุยา", "explanation_general": "รัสสะ อู เป็น อุ, แปลง ส เป็น ยา", "final_suffix": "อุยา", "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อู+นํ = อูนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อู+สฺมา = อุยา", "explanation_general": "รัสสะ อู เป็น อุ, แปลง สฺมา เป็น ยา", "final_suffix": "อุยา", "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อู+หิ = อูหิ / อู+หิ = อูภิ", "explanation_general": "คง หิ ไว้ / แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อู+ส = อุยา", "explanation_general": "รัสสะ อู เป็น อุ, แปลง ส เป็น ยา", "final_suffix": "อุยา", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อู+นํ = อูนํ", "explanation_general": "คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อู+สฺมิํ = อุยา / อู+สฺมิํ = อุยํ", "explanation_general": "รัสสะ อู เป็น อุ, แปลง สฺมิํ เป็น ยา / รัสสะ อู เป็น อุ, แปลง สฺมิํ เป็น ยํ", "final_suffix": ["อุยา", "อุยํ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อู+สุ = อูสุ", "explanation_general": "คง สุ ไว้", "final_suffix": "อูสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อู+สิ = อุ", "explanation_general": "รัสสะ อู เป็น อุ, ลบ สิ", "final_suffix": "อุ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อู+โย = อุโย / อู+โย = อู", "explanation_general": "รัสสะ อู เป็น อุ, คง โย ไว้ / ลบ โย", "final_suffix": ["อุโย", "อู"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อ การันต์ (A-Karanta) ---
    "a-napun": { // อ การันต์, นปุงสกลิงค์ (เช่น กุล, วน, จิตฺต)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อ+สิ = อํ", "explanation_general": "ลบ อ, แปลง สิ เป็น อํ", "final_suffix": "ํ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = อานิ", "explanation_general": "ทีฆะ อ เป็น อา, แปลง โย เป็น นิ", "final_suffix": "อานิ", "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อ+อํ = อํ", "explanation_general": "ลบ อ, คง อํ ไว้", "final_suffix": "ํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = อานิ", "explanation_general": "ทีฆะ อ เป็น อา, แปลง โย เป็น นิ", "final_suffix": "อานิ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อ+นา = เอน", "explanation_general": "ลบ อ, แปลง นา เป็น เอน", "final_suffix": "เอน", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อ+หิ = เอหิ / อ+หิ = เอภิ", "explanation_general": "เอา อ เป็น เอ, คง หิ ไว้ / เอา อ เป็น เอ, แปลง หิ เป็น ภิ", "final_suffix": ["เอหิ", "เอภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อ+ส = อสฺส / อ+ส = อาย / อ+ส = อตฺถํ", "explanation_general": "ลง สฺ อาคม / ลบ อ, แปลง ส เป็น อาย / แปลง ส เป็น ตฺถํ", "final_suffix": ["อสฺส", "อาย", "อตฺถํ"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อ+นํ = อานํ", "explanation_general": "ทีฆะ อ เป็น อา, คง นํ ไว้", "final_suffix": "อานํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อ+สฺมา = อสฺมา / อ+สฺมา = อมฺหา / อ+สฺมา = อา", "explanation_general": "คง สฺมา ไว้ / แปลง สฺมา เป็น มฺหา / ลบ อ, แปลง สฺมา เป็น อา", "final_suffix": ["อสฺมา", "อมฺหา", "อา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อ+หิ = เอหิ / อ+หิ = เอภิ", "explanation_general": "เอา อ เป็น เอ, คง หิ ไว้ / เอา อ เป็น เอ, แปลง หิ เป็น ภิ", "final_suffix": ["เอหิ", "เอภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อ+ส = อสฺส", "explanation_general": "ลง สฺ อาคม", "final_suffix": "อสฺส", "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อ+นํ = อานํ", "explanation_general": "ทีฆะ อ เป็น อา, คง นํ ไว้", "final_suffix": "อานํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อ+สฺมิํ = อสฺมิํ / อ+สฺมิํ = อมฺหิ / อ+สฺมิํ = เอ", "explanation_general": "คง สฺมิํ ไว้ / แปลง สฺมิํ เป็น มฺหิ / ลบ อ, แปลง สฺมิํ เป็น เอ", "final_suffix": ["อสฺมิํ", "อมฺหิ", "เอ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อ+สุ = เอสุ", "explanation_general": "เอา อ เป็น เอ, คง สุ ไว้", "final_suffix": "เอสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อ+สิ = อ", "explanation_general": "ลบ สิ", "final_suffix": "", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }, // ในนปุงลิงค์ อาลปนะ เอกวจนะ สิ แปลงเป็น อํ ได้ด้วย
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อ+โย = อานิ", "explanation_general": "ทีฆะ อ เป็น อา, แปลง โย เป็น นิ", "final_suffix": "อานิ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อิ การันต์ (I-Karanta) ---
    "i-napun": { // อิ การันต์, นปุงสกลิงค์ (เช่น อตฺถิ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "อิ", "meaning": "อ." }, // final_suffix เป็น "อิ" ตามตาราง
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อีนิ / อิ+โย = อี", "explanation_general": "ทีฆะ อิ เป็น อี, แปลง โย เป็น นิ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อีนิ", "อี"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อิ+อํ = อิํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "ิํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }, // final_suffix เป็น "ึ" ตามตาราง
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อีนิ / อิ+โย = อี", "explanation_general": "ทีฆะ อิ เป็น อี, แปลง โย เป็น นิ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อีนิ", "อี"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อิ+นา = อินา", "explanation_general": "คง นา ไว้", "final_suffix": "อินา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิสฺส / อิ+ส = อิโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "ทีฆะ อิ เป็น อี, คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อิ+สฺมา = อิสฺมา / อิ+สฺมา = อิมฺหา", "explanation_general": "คง สฺมา / แปลง สฺมา เป็น มฺหา", "final_suffix": ["อิสฺมา", "อิมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อิ+หิ = อีหิ / อิ+หิ = อีภิ", "explanation_general": "ทีฆะ อิ เป็น อี, คง หิ ไว้ / ทีฆะ อิ เป็น อี, แปลง หิ เป็น ภิ", "final_suffix": ["อีหิ", "อีภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อิ+ส = อิสฺส / อิ+ส = อิโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อิสฺส", "อิโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อิ+นํ = อีนํ", "explanation_general": "ทีฆะ อิ เป็น อี, คง นํ ไว้", "final_suffix": "อีนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อิ+สฺมิํ = อิสฺมิํ / อิ+สฺมิํ = อิมฺหิ", "explanation_general": "คง สฺมิํ / แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อิสฺมิํ", "อิมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อิ+สุ = อีสุ", "explanation_general": "ทีฆะ อิ เป็น อี, คง สุ ไว้", "final_suffix": "อีสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อิ+สิ = อิ", "explanation_general": "ลบ สิ", "final_suffix": "อิ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }, // final_suffix เป็น "อิ" ตามตาราง
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อิ+โย = อีนิ / อิ+โย = อี", "explanation_general": "ทีฆะ อิ เป็น อี, แปลง โย เป็น นิ / ทีฆะ อิ เป็น อี, ลบ โย", "final_suffix": ["อีนิ", "อี"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    },

    // --- อุ การันต์ (U-Karanta) ---
    "u-napun": { // อุ การันต์, นปุงสกลิงค์ (เช่น จกฺขุ, อายุ)
        "ปฐมา": {
            "karaka": "แสดงลิงค์, แสดงความเป็นกัตตา คือ ผู้ทำ", "short_name": "ป.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "อ." },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อูนิ / อุ+โย = อู", "explanation_general": "ทีฆะ อุ เป็น อู, แปลง โย เป็น นิ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อูนิ", "อู"], "meaning": "อ." }
        },
        "ทุติยา": {
            "karaka": "แสดงความเป็นกัมม คือ ผู้/สิ่งที่ถูกกระทำ", "short_name": "ทุ.",
            "เอกวจนะ": { "suffix_orig": "อํ", "formula_general": "อุ+อํ = อุํ", "explanation_general": "แปลง อํ เป็นนิคคหิต", "final_suffix": "อุํ", "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อูนิ / อุ+โย = อู", "explanation_general": "ทีฆะ อุ เป็น อู, แปลง โย เป็น นิ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อูนิ", "อู"], "meaning": "ซึ่ง, สู่, ยัง, สิ้น, ตลอด, กะ, เฉพาะ" }
        },
        "ตติยา": {
            "karaka": "แสดงความเป็นกรณ คือ เครื่องมือ/เหตุ", "short_name": "ต.",
            "เอกวจนะ": { "suffix_orig": "นา", "formula_general": "อุ+นา = อุนา", "explanation_general": "คง นา ไว้", "final_suffix": "อุนา", "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "ด้วย, โดย, อัน, ตาม, เพราะ, มี, ด้วยทั้ง" }
        },
        "จตุตถี": {
            "karaka": "แสดงความเป็นสัมปทาน คือ ผู้รับมอบ", "short_name": "จ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุสฺส / อุ+ส = อุโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แก่, เพื่อ, ต่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แก่, เพื่อ, ต่อ" }
        },
        "ปัญจมี": {
            "karaka": "แสดงความเป็นอปาทาน คือ แดนออก, แสดงความเป็นเหตุ", "short_name": "ปญฺ.",
            "เอกวจนะ": { "suffix_orig": "สฺมา", "formula_general": "อุ+สฺมา = อุสฺมา / อุ+สฺมา = อุมฺหา", "explanation_general": "คง สฺมา / แปลง สฺมา เป็น มฺหา", "final_suffix": ["อุสฺมา", "อุมฺหา"], "meaning": "แต่, จาก, กว่า, เหตุ" },
            "พหุวจนะ": { "suffix_orig": "หิ", "formula_general": "อุ+หิ = อูหิ / อุ+หิ = อูภิ", "explanation_general": "ทีฆะ อุ เป็น อู, คง หิ ไว้ / ทีฆะ อุ เป็น อู, แปลง หิ เป็น ภิ", "final_suffix": ["อูหิ", "อูภิ"], "meaning": "แต่, จาก, กว่า, เหตุ" }
        },
        "ฉัฏฐี": {
            "karaka": "แสดงความเป็นสัมพันธ คือ เจ้าของ", "short_name": "ฉ.",
            "เอกวจนะ": { "suffix_orig": "ส", "formula_general": "อุ+ส = อุสฺส / อุ+ส = อุโน", "explanation_general": "ลง สฺ อาคม / แปลง ส เป็น โน", "final_suffix": ["อุสฺส", "อุโน"], "meaning": "แห่ง, ของ, เมื่อ" },
            "พหุวจนะ": { "suffix_orig": "นํ", "formula_general": "อุ+นํ = อูนํ", "explanation_general": "ทีฆะ อุ เป็น อู, คง นํ ไว้", "final_suffix": "อูนํ", "meaning": "แห่ง, ของ, เมื่อ" }
        },
        "สัตตมี": {
            "karaka": "แสดงความเป็นอาธาร คือ ที่ตั้ง, สถานที่/โอกาส", "short_name": "ส.",
            "เอกวจนะ": { "suffix_orig": "สฺมิํ", "formula_general": "อุ+สฺมิํ = อุสฺมิํ / อุ+สฺมิํ = อุมฺหิ", "explanation_general": "คง สฺมิํ / แปลง สฺมิํ เป็น มฺหิ", "final_suffix": ["อุสฺมิํ", "อุมฺหิ"], "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " },
            "พหุวจนะ": { "suffix_orig": "สุ", "formula_general": "อุ+สุ = อูสุ", "explanation_general": "ทีฆะ อุ เป็น อู, คง สุ ไว้", "final_suffix": "อูสุ", "meaning": "ใน, ใกล้, ที่, ครั้งเมื่อ, ในเพราะ, เหนือ, บน, ณ " }
        },
        "อาลปนะ": {
            "karaka": "แสดงความเป็นอาลปน คือ คำสำหรับร้องเรียก", "short_name": "อา.",
            "เอกวจนะ": { "suffix_orig": "สิ", "formula_general": "อุ+สิ = อุ", "explanation_general": "ลบ สิ", "final_suffix": "อุ", "meaning": "แน่ะ, ดูก่อน, ข้าแต่" },
            "พหุวจนะ": { "suffix_orig": "โย", "formula_general": "อุ+โย = อูนิ / อุ+โย = อู", "explanation_general": "ทีฆะ อุ เป็น อู, แปลง โย เป็น นิ / ทีฆะ อุ เป็น อู, ลบ โย", "final_suffix": ["อูนิ", "อู"], "meaning": "แน่ะ, ดูก่อน, ข้าแต่" }
        }
    }
};