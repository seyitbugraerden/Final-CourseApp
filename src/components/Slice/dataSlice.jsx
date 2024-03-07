import { createSlice, current } from "@reduxjs/toolkit";
import { message } from "antd";
import { nanoid } from "nanoid";

const initialState = {
  isValid: false,
  students: [
    {
      value: "11-EA",
      title: "11-EA",
      selectable : false,
      children: [
        {
          value: "OZAN ATA DURAK",
          title: "OZAN ATA DURAK",
        },
        {
          value: "HİRA BOYRAZ",
          title: "HİRA BOYRAZ",
        },
        {
          value: "İLAYDA SÜMEYRA ÖNDER",
          title: "İLAYDA SÜMEYRA ÖNDER",
        },
        {
          value: "EGE YELTEKİN",
          title: "EGE YELTEKİN",
        },
        {
          value: "SELVİNUR ÖZCAN",
          title: "SELVİNUR ÖZCAN",
        },
        {
          value: "DEFNE TANRIVERDİ",
          title: "DEFNE TANRIVERDİ",
        },
      ],
    },
    {
      value: "11-SAY-A",
      title: "11-SAY-A",
      selectable : false,
      children: [
        {
          value: "AYŞENUR ÜLGER",
          title: "AYŞENUR ÜLGER",
        },
        {
          value: "NESLİHAN ŞAHİN",
          title: "NESLİHAN ŞAHİN",
        },
        {
          value: "KUZEY TANRIVERDİ",
          title: "KUZEY TANRIVERDİ",
        },
        {
          value: "CAHİT EFE ŞSHİN",
          title: "CAHİT EFE ŞSHİN",
        },
        {
          value: "ŞEVVAL ECEM ÖZDEMİR",
          title: "ŞEVVAL ECEM ÖZDEMİR",
        },
        {
          value: "YİĞİT EFE SEYLAN",
          title: "YİĞİT EFE SEYLAN",
        },
        {
          value: "AHMET YAVUZHAN FINDIK",
          title: "AHMET YAVUZHAN FINDIK",
        },
        {
          value: "MEHLİKA REYYAN ÖZDEMİR",
          title: "MEHLİKA REYYAN ÖZDEMİR",
        },
        {
          value: "MUHAMMED YİĞİT AĞIR",
          title: "MUHAMMED YİĞİT AĞIR",
        },
        {
          value: "MUHAMMMED EREN BABAYİĞİT",
          title: "MUHAMMMED EREN BABAYİĞİT",
        },
        {
          value: "ECENAZ TAYFUN",
          title: "ECENAZ TAYFUN",
        },
        {
          value: "IRMAK AKSOY",
          title: "IRMAK AKSOY",
        },
        {
          value: "FİRDEVS NUR COŞAN",
          title: "FİRDEVS NUR COŞAN",
        },
      ],
    },
    {
      value: "11-SAY-B",
      title: "11-SAY-B",
      selectable : false,
      children: [
        {
          value: "ELİF ŞİMŞEK",
          title: "ELİF ŞİMŞEK",
        },
        {
          value: "TUĞBA DEFNE ÖZDEMİR",
          title: "TUĞBA DEFNE ÖZDEMİR",
        },
        {
          value: "MEHMET ASLAN",
          title: "MEHMET ASLAN",
        },
        {
          value: "MELİH KEREM ÜLGER",
          title: "MELİH KEREM ÜLGER",
        },
        {
          value: "CEYDA DEMİRÖS",
          title: "CEYDA DEMİRÖS",
        },
        {
          value: "ELİF SELEN ESER",
          title: "ELİF SELEN ESER",
        },
        {
          value: "SEFA ÇAĞRI ALACAHAN",
          title: "SEFA ÇAĞRI ALACAHAN",
        },
        {
          value: "YAĞMUR AZRA ÇELEBİ",
          title: "YAĞMUR AZRA ÇELEBİ",
        },
        {
          value: "HİLAL ÜLKER",
          title: "HİLAL ÜLKER",
        },
        {
          value: "ENES YEŞİLDAL",
          title: "ENES YEŞİLDAL",
        },
        {
          value: "ERBERK HİKMET",
          title: "ERBERK HİKMET",
        },
        {
          value: "MUSTAFA SALİHCAN DALKIRAN",
          title: "MUSTAFA SALİHCAN DALKIRAN",
        },
      ],
    },
    {
      value: "12-EA",
      title: "12-EA",
      selectable : false,
      children: [
        {
          value: "MUSTAFA SELİM KOÇ",
          title: "MUSTAFA SELİM KOÇ",
        },
        {
          value: "BEYZA NUROĞLU",
          title: "BEYZA NUROĞLU",
        },
        {
          value: "İBRAHİM ALP TAŞKIRAN",
          title: "İBRAHİM ALP TAŞKIRAN",
        },
        {
          value: "MEHLİKA KORKUTATA",
          title: "MEHLİKA KORKUTATA",
        },
        {
          value: "SİNAN GEZER",
          title: "SİNAN GEZER",
        },
        {
          value: "ELANUR ALTUNTAŞ",
          title: "ELANUR ALTUNTAŞ",
        },
        {
          value: "SEDA AKYÜREK",
          title: "SEDA AKYÜREK",
        },
        {
          value: "MUHAMMED GÜNEY",
          title: "MUHAMMED GÜNEY",
        },
        {
          value: "NAZ YILMAZ",
          title: "NAZ YILMAZ",
        },
        {
          value: "EBRAR TUKAT",
          title: "EBRAR TUKAT",
        },
        {
          value: "HATİCE KÜBRA DEMİRAL",
          title: "HATİCE KÜBRA DEMİRAL",
        },
      ],
    },
    {
      value: "12-SAY-A",
      title: "12-SAY-A",
      selectable : false,
      children: [
        {
          value: "ASYA SANEM SAYLAN",
          title: "ASYA SANEM SAYLAN",
        },
        {
          value: "SUDENAZ KILIÇ",
          title: "SUDENAZ KILIÇ",
        },
        {
          value: "CEMRE NAZ ÖZKAN",
          title: "CEMRE NAZ ÖZKAN",
        },
        {
          value: "ESMA NUR MERCAN",
          title: "ESMA NUR MERCAN",
        },
        {
          value: "HALİS SERKAN ÇAKMAKCI",
          title: "HALİS SERKAN ÇAKMAKCI",
        },
        {
          value: "RANA ATALAY",
          title: "RANA ATALAY",
        },
        {
          value: "FATMANUR ŞİRİN",
          title: "FATMANUR ŞİRİN",
        },
      ],
    },
    {
      value: "12-SAY-B",
      title: "12-SAY-B",
      selectable : false,
      children: [
        {
          value: "ADNAN EMRE TAŞKIRAN",
          title: "ADNAN EMRE TAŞKIRAN",
        },
        {
          value: "TUANA ÖZDEMİR",
          title: "TUANA ÖZDEMİR",
        },
        {
          value: "ÖMER MERT AYAZ",
          title: "ÖMER MERT AYAZ",
        },
        {
          value: "TAHSİN KOCAOĞLU",
          title: "TAHSİN KOCAOĞLU",
        },
        {
          value: "ECRİN YAĞMUR",
          title: "ECRİN YAĞMUR",
        },
        {
          value: "ZEYNEP SÜMEYYE AKGÜN",
          title: "ZEYNEP SÜMEYYE AKGÜN",
        },
        {
          value: "ELİF EBRAR AKSOY",
          title: "ELİF EBRAR AKSOY",
        },
      ],
    },
    {
      value: "MEZUN-SAY-A",
      title: "MEZUN-SAY-A",
      selectable : false,
      children: [
        {
          value: "MUHAMMED SALİH DURGUT",
          title: "MUHAMMED SALİH DURGUT",
        },
        {
          value: "EFE SARI",
          title: "EFE SARI",
        },
        {
          value: "SALİH EMİN ÜNAL",
          title: "SALİH EMİN ÜNAL",
        },
        {
          value: "ÖMER FARUK AVAL",
          title: "ÖMER FARUK AVAL",
        },
        {
          value: "ZEHRA MEKİK",
          title: "ZEHRA MEKİK",
        },
        {
          value: "SUDENUR KAMACI",
          title: "SUDENUR KAMACI",
        },
        {
          value: "İREM YAĞMUR ACAR",
          title: "İREM YAĞMUR ACAR",
        },
        {
          value: "SEDEN DOĞAN",
          title: "SEDEN DOĞAN",
        },
        {
          value: "MELİH ARIDURU",
          title: "MELİH ARIDURU",
        },
        {
          value: "RAVZA NUR ALPAGUT",
          title: "RAVZA NUR ALPAGUT",
        },
        {
          value: "BEKİR KERİM EKTİ",
          title: "BEKİR KERİM EKTİ",
        },
        {
          value: "BAYRAM BERAT AKAR",
          title: "BAYRAM BERAT AKAR",
        },
        {
          value: "METİN KILIÇ",
          title: "METİN KILIÇ",
        },
        {
          value: "ŞÜHEDA ILICA",
          title: "ŞÜHEDA ILICA",
        },
        {
          value: "BETÜL İLKİM KARTAL",
          title: "BETÜL İLKİM KARTAL",
        },
      ],
    },
    {
      value: "MEZUN-SAY-B",
      title: "MEZUN-SAY-B",
      selectable : false,
      children: [
        {
          value: "NİDANUR AKÇAN",
          title: "NİDANUR AKÇAN",
        },
        {
          value: "ŞİAR ABDURRAHMAN ÇELİK",
          title: "ŞİAR ABDURRAHMAN ÇELİK",
        },
        {
          value: "İREM BOZKURT",
          title: "İREM BOZKURT",
        },
        {
          value: "MUHAMMED YAHYA KUTOĞLU",
          title: "MUHAMMED YAHYA KUTOĞLU",
        },
        {
          value: "EREN GÖDEN",
          title: "EREN GÖDEN",
        },
        {
          value: "NAZLI SENA ÇELİKER",
          title: "NAZLI SENA ÇELİKER",
        },
        {
          value: "ELİF EYLÜL DURMAZ",
          title: "ELİF EYLÜL DURMAZ",
        },
        {
          value: "EMİRHAN KARAMAN",
          title: "EMİRHAN KARAMAN",
        },
        {
          value: "SİDELYA ŞİMAN",
          title: "SİDELYA ŞİMAN",
        },
        {
          value: "SUDE GÜL",
          title: "SUDE GÜL",
        },
        {
          value: "AHMET KARADÖL",
          title: "AHMET KARADÖL",
        },
      ],
    },
    {
      value: "MEZUN-EA-A",
      title: "MEZUN-EA-A",
      selectable : false,
      children: [
        {
          value: "CEYLİN KAPLAN",
          title: "CEYLİN KAPLAN",
        },
        {
          value: "AZRA KARABAYIR",
          title: "AZRA KARABAYIR",
        },
        {
          value: "ARZUM NUR ARSLAN",
          title: "ARZUM NUR ARSLAN",
        },
        {
          value: "ZEREN NURUAN",
          title: "ZEREN NURUAN",
        },
        {
          value: "GÖZDE KILIÇER",
          title: "GÖZDE KILIÇER",
        },
        {
          value: "AHMET KASIM",
          title: "AHMET KASIM",
        },
        {
          value: "MERVE AYDIN",
          title: "MERVE AYDIN",
        },
        {
          value: "RÜVEYDA İPEK TOPAÇ",
          title: "RÜVEYDA İPEK TOPAÇ",
        },
        {
          value: "ELİF BEYZA GÖKÇE",
          title: "ELİF BEYZA GÖKÇE",
        },
        {
          value: "DAMLA SÜRÜCÜOĞLU",
          title: "DAMLA SÜRÜCÜOĞLU",
        },
        {
          value: "GÜL AYANOĞLU",
          title: "GÜL AYANOĞLU",
        },
      ],
    },
    {
      value: "MEZUN-EA-B",
      title: "MEZUN-EA-B",
      selectable : false,
      children: [
        {
          value: "KAAN ARSLAN UZUNOĞLU",
          title: "KAAN ARSLAN UZUNOĞLU",
        },
        {
          value: "BELİNAY DEMİROĞLU",
          title: "BELİNAY DEMİROĞLU",
        },
        {
          value: "İSMAİL MEHMET MERT CİVAN",
          title: "İSMAİL MEHMET MERT CİVAN",
        },
        {
          value: "EFE HALİT DEMİRCİ",
          title: "EFE HALİT DEMİRCİ",
        },
        {
          value: "AHMET CAN MERCAN",
          title: "AHMET CAN MERCAN",
        },
        {
          value: "MUHAMMET SALİH AYDIN",
          title: "MUHAMMET SALİH AYDIN",
        },
        {
          value: "RANA BERİN IRMAK",
          title: "RANA BERİN IRMAK",
        },
        {
          value: "FEYZA NUR DEMİRTAŞ",
          title: "FEYZA NUR DEMİRTAŞ",
        },
        {
          value: "HAMDİ ARDA AKIN",
          title: "HAMDİ ARDA AKIN",
        },
        {
          value: "EFİL TUANA ŞAHİNDOKUYUCU",
          title: "EFİL TUANA ŞAHİNDOKUYUCU",
        },
        {
          value: "MELİSA KAPLAN",
          title: "MELİSA KAPLAN",
        },
        {
          value: "KAĞAN AKAR",
          title: "KAĞAN AKAR",
        },
      ],
    },
  ],
  teachers: [
    {
      value: "Edebiyat - Türkçe",
      title: "Edebiyat - Türkçe",
      selectable : false,
      children: [
        {
          value: "Edebiyat - Türkçe - HİCRAN ÇEVİK",
          title: "Edebiyat - Türkçe - HİCRAN ÇEVİK",
        },
      ],
    },
    {
      value: "Matematik",
      title: "Matematik",
      selectable : false,
      children: [
        {
          value: "Matematik - RAMAZAN KILIÇ",
          title: "Matematik - RAMAZAN KILIÇ",
        },
        {
          value: "Matematik - ALİ İHSAN ÖZKAN",
          title: "Matematik - ALİ İHSAN ÖZKAN",
        },
        {
          value: "Matematik - AHMET ÖZDEMİR",
          title: "Matematik - AHMET ÖZDEMİR",
        },
      ],
    },
    {
      value: "Geometri",
      title: "Geometri",
      selectable : false,
      children: [
        {
          value: "Geometri - HÜLYA SAYKAL",
          title: "Geometri - HÜLYA SAYKAL",
        },
      ],
    },
    {
      value: "Fizik",
      title: "Fizik",
      selectable : false,
      children: [
        {
          value: "Fizik - MUSTAFA ERDEN",
          title: "Fizik - MUSTAFA ERDEN",
        },
        {
          value: "Fizik - FATMA DOĞAN",
          title: "Fizik - FATMA DOĞAN",
        },
      ],
    },
    {
      value: "Kimya",
      title: "Kimya",
      selectable : false,
      children: [
        {
          value: "Kimya - KORAY SÜRÜCÜOĞLU",
          title: "Kimya - KORAY SÜRÜCÜOĞLU",
        },
        {
          value: "Kimya - ELİF ALTUNAY",
          title: "Kimya - ELİF ALTUNAY",
        },
      ],
    },
    {
      value: "Biyoloji",
      title: "Biyoloji",
      selectable : false,
      children: [
        {
          value: "Biyoloji - DAMLA BAYEZİT",
          title: "Biyoloji - DAMLA BAYEZİT",
        },
      ],
    },
    {
      value: "Tarih",
      title: "Tarih",
      selectable : false,
      children: [
        {
          value: "Tarih - KENAN İNAN",
          title: "Tarih - KENAN İNAN",
        },
      ],
    },
    {
      value: "Coğrafya",
      title: "Coğrafya",
      selectable : false,
      children: [
        {
          value: "Coğrafya - RIZA GÖKÇE",
          title: "Coğrafya - RIZA GÖKÇE",
        },
      ],
    },
  ],
  selectedElements: {
    students: [],
    teachers: [],
    date: "",
    subject: "",
  },
  savedElement: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    handleStudents: (state, action) => {
      state.selectedElements.students = action.payload;
    },
    handleTeachers: (state, action) => {
      state.selectedElements.teachers = action.payload;
    },
    handleDate: (state, action) => {
      state.selectedElements.date = action.payload;
    },
    handleSubject: (state, action) => {
      state.selectedElements.subject = action.payload;
    },
    handleSubmit: (state) => {
      if (
        state.selectedElements.students.length === 0 ||
        state.selectedElements.teachers.length === 0 ||
        state.selectedElements.date === "" ||
        state.selectedElements.subject === ""
      ) {
        message.error("Eksik Veri Girdiniz");
      } else {
        message.success("Tablo Oluşturuldu");
        const newElement = {
          ...state.selectedElements,
          key: nanoid(),
        };
        state.isValid = true;
        state.savedElement.push(newElement);
        state.selectedElements = {
          students: [],
          teachers: [],
          date: "",
          subject: "",
        };
      }
    },
    deleteElement: (state, action) => {
      state.savedElement = state.savedElement.filter(
        (item) => item.key !== action.payload
      );
    },
  },
});

export const {
  handleStudents,
  handleTeachers,
  handleDate,
  handleSubject,
  handleSubmit,
  deleteElement,
} = dataSlice.actions;
export default dataSlice.reducer;
