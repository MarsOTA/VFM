import { EventStatus, OperationalEvent, Operator } from './types';

export const ALL_SEDI = [
  "SEDE CENTRALE",
  "DISTACCAMENTO RHO",
  "DISTACCAMENTO SESTO",
  "DISTACCAMENTO GORGONZOLA",
  "DISTACCAMENTO ABBIATEGRASSO",
  "DISTACCAMENTO LEGNANO"
];

export const ALL_PATENTI = [
  "1", "2", "3", "4", "1 LIM.", "2 LIM.", "3 LIM.", "AUT.ANFIBI"
];

export const ALL_SPECIALIZATIONS = [
  "AUTISTA di 1^ GRADO", "OPERATORE AVANZATO TAS (TAS2)", "AUTISTA di 4^ GRADO", "OPERATORE BASE TAS (TAS1)",
  "SAF FLUVIALE", "SAF 1B", "SAF 2A", "SALVAMENTO A NUOTO", "TECNICHE PRIMO SOCCORSO",
  "URBAN SEARCH & RESCUE LIGHT", "AUTISTA di 2^ GRADO", "(NBCR) NUCLEO BATTERIOLOGICO",
  "AUTISTA di 3^ GRADO", "NUCLEO BATTERIOLOGICO LIV. 2", "PATENTE NAUTICA 1^ CAT.",
  "URBAN SEARCH & RESCUE MEDIUM", "NBCR TRAVASI LPG", "NUCLEO BATTERIOLOGICO LIV. 3",
  "SAF BASICO", "ESTENSIONE AS/PIATT. AEREA", "POLIZIA GIUDIZIARIA", "PUNTELLAMENTI E COSTRUZIONI",
  "SOCCORRITORE AEROPORTUALE", "AUTOPROT. AMBIENTE ACQUATICO", "CORSO AEROPORTUALE",
  "AUTISTA di 1^ GRADO LIM.", "OPERAT. CENTRALE OPERATIVA 115", "PREVENZIONE INCENDI MODULO 1-2",
  "SOCCORSO ACQUATICO", "NBCR ISTRUTTORE PRATICA NBCR", "NBCR SQUADRE AVANZATE NR",
  "NUCLEI INVESTIG. ANTINCENDIO", "ESTENSIONE AUTOGRU", "GUIDA SU TERRENO NON PREPARATO",
  "PREVENZIONE INCENDI MODULI 5-8", "PREVENZIONE INCENDI MODULO 3-4", "PREVENZIONE INCENDI MODULO 5-6",
  "SAF 1A", "CONDUTTORE MOTO D'ACQUA (PWC)", "DIRETTORE OPER. SPEGNIMENTO", "PATENTE NAUTICA 2^ CAT.",
  "ADD. SERVIZIO PREV. E PROT.", "SOMMOZZATORE", "AUTISTA di 3^ GRADO LIM.", "MOVIMENTO TERRA",
  "PAT. NAUTICA 1^CAT.+ANFIBI", "PAT. NAUTICA 2^CAT.+ANFIBI", "DIRETTIVO TAS", "RADIOMETRIA E RADIOATTIVITA'",
  "NBCR LIVELLO 0", "AUTISTA di 2^ GRADO LIM.", "SPELEO ALPINO FLUVIALI", "ESTENSIONE MEZZI AEROPORTUALI",
  "ATTREZZATURE di SOCCORSO", "NBCR LIVELLO 1", "TEORIA AEROPORTUALE", "ISTRUTTORE GINNICO",
  "ACQUATICITA'", "ANTINCENDIO BOSCHIVO", "BLS BASE", "AUTISTA ANFIBI", "ISTRUTTORE ATP",
  "COEM ROSSO ADDETTO MONTAGGIO", "PREVENZIONE INCENDI", "NBCR LIVELLO 2)", "ISTRUTTORE SAF BASICO",
  "ADDETTO SO MODULO INFORMATICO", "ISTRUTTORE T.P.S.S.", "ANTINCENDIO NAVALE", "ADDETTO SO MODULO TLC",
  "CONDUTTORE NATANTI FINO HP 80", "INFORMATICA APPLICATA", "CINOFILO", "NIA 2 LIVELLO",
  "PRATICA AEROPORTUALE", "SOSTANZE PERICOLOSE"
];

export const MOCK_OPERATORS: Operator[] = [
  // GRUPPO A
  { id: 'DIR-A1', name: 'VALENTI ROBERTO', rank: 'Dirigente', group: 'A', subgroup: 'A1', qualification: 'DIR', available: true, assignedHours: 8, specializations: ['DIRETTORE OPER. SPEGNIMENTO'], sede: 'SEDE CENTRALE', tipoPatente: '3' },
  { id: 'VIG-A1', name: 'LUCA BIANCHI', rank: 'Vigile Coord.', group: 'A', subgroup: 'A1', qualification: 'VIG', available: true, assignedHours: 36, specializations: ['SAF FLUVIALE'], sede: 'DISTACCAMENTO SESTO', tipoPatente: '2' },
  { id: 'VIG-A6', name: 'ZANCHI LUCA', rank: 'Vigile del Fuoco', group: 'A', subgroup: 'A6', qualification: 'VIG', available: true, assignedHours: 12, specializations: ['TAS1'], sede: 'SEDE CENTRALE', tipoPatente: '2' },
  { id: 'VIG-A6-B', name: 'MANCINI PAOLO', rank: 'Vigile del Fuoco', group: 'A', subgroup: 'A6', qualification: 'VIG', available: true, assignedHours: 0, specializations: ['NBCR'], sede: 'DISTACCAMENTO SESTO', tipoPatente: '3' },

  // GRUPPO B
  { id: 'VIG-B6', name: 'POZZI MARCO', rank: 'Vigile del Fuoco', group: 'B', subgroup: 'B6', qualification: 'VIG', available: true, assignedHours: 4, specializations: ['SAF 1A'], sede: 'DISTACCAMENTO SESTO', tipoPatente: '3' },
  { id: 'CP-B6', name: 'GENTILE FABRIZIO', rank: 'Capo Squadra', group: 'B', subgroup: 'B6', qualification: 'CP', available: true, assignedHours: 12, specializations: ['PUNTELLAMENTI'], sede: 'SEDE CENTRALE', tipoPatente: '4' },

  // GRUPPO C
  { id: 'DIR-C1', name: 'MARTINA COLLI', rank: 'Dirigente', group: 'C', subgroup: 'C1', qualification: 'DIR', available: true, assignedHours: 0, specializations: ['DIRETTORE OPERAZIONI'], sede: 'SEDE CENTRALE', tipoPatente: '3' },
  { id: 'CP-C1', name: 'GALLI FABRIZIO', rank: 'Capo Squadra', group: 'C', subgroup: 'C1', qualification: 'CP', available: true, assignedHours: 8, specializations: ['ISTRUTTORE SAF'], sede: 'DISTACCAMENTO SESTO', tipoPatente: '4' },
  { id: 'VIG-C1', name: 'DANI COSTA', rank: 'Vigile del Fuoco', group: 'C', subgroup: 'C1', qualification: 'VIG', available: true, assignedHours: 16, specializations: ['PUNTELLAMENTI'], sede: 'DISTACCAMENTO GORGONZOLA', tipoPatente: '2' },
  { id: 'VIG-C6', name: 'LOMBARDI LUIGI', rank: 'Vigile Coord.', group: 'C', subgroup: 'C6', qualification: 'VIG', available: true, assignedHours: 12, specializations: ['COEM ROSSO'], sede: 'DISTACCAMENTO ABBIATEGRASSO', tipoPatente: '2' },
  { id: 'VIG-C8', name: 'ROMANI ANNA', rank: 'Vigile Coord.', group: 'C', subgroup: 'C8', qualification: 'VIG', available: true, assignedHours: 4, specializations: ['TPS'], sede: 'SEDE CENTRALE', tipoPatente: '2' },

  // GRUPPO D
  { id: 'VIG-D5', name: 'KIM ROSSI', rank: 'Vigile del Fuoco', group: 'D', subgroup: 'D5', qualification: 'VIG', available: true, assignedHours: 4, specializations: ['TPS'], sede: 'SEDE CENTRALE', tipoPatente: '1' },
  { id: 'VIG-D6', name: 'COSTA DANIELE', rank: 'Vigile del Fuoco', group: 'D', subgroup: 'D6', qualification: 'VIG', available: true, assignedHours: 16, specializations: ['PUNTELLAMENTI'], sede: 'DISTACCAMENTO ABBIATEGRASSO', tipoPatente: '2' },

  // GRUPPO EXTRA (Sempre disponibili per tutti)
  { id: 'EXTRA-1', name: 'RIZZI GIOVANNI', rank: 'Vigile del Fuoco', group: 'EXTRA', subgroup: 'EXTRA', qualification: 'VIG', available: true, assignedHours: 0, specializations: ['TAS1'], sede: 'SEDE CENTRALE', tipoPatente: '3' },
  { id: 'EXTRA-2', name: 'VERDI PAOLO', rank: 'Vigile Esperto', group: 'EXTRA', subgroup: 'EXTRA', qualification: 'VIG', available: true, assignedHours: 4, specializations: ['NBCR'], sede: 'DISTACCAMENTO LEGNANO', tipoPatente: '2' },
  { id: 'EXTRA-3', name: 'BRUNI MATTEO', rank: 'Capo Reparto', group: 'EXTRA', subgroup: 'EXTRA', qualification: 'CP', available: true, assignedHours: 12, specializations: ['USAR LIGHT'], sede: 'SEDE CENTRALE', tipoPatente: '4' },
  { id: 'EXTRA-4', name: 'SILVA MONICA', rank: 'Vigile del Fuoco', group: 'EXTRA', subgroup: 'EXTRA', qualification: 'VIG', available: true, assignedHours: 0, specializations: ['SAF 2A'], sede: 'DISTACCAMENTO RHO', tipoPatente: '3' },
];

export const MOCK_EVENTS: OperationalEvent[] = [
  { 
    id: 'EV-RHO-01', 
    code: 'RHO HOKEY', 
    location: 'FIERA MILANO, RHO', 
    date: '2026-02-17',
    timeWindow: '08:00 - 20:00', 
    status: EventStatus.IN_COMPILAZIONE,
    vehicles: { APS: 2, AS: 1, ABP: 1 },
    requirements: [
      { role: 'DIR', qty: 1, assignedIds: Array(1).fill(null), entrustedGroups: Array(1).fill(null) },
      { role: 'CP', qty: 2, assignedIds: Array(2).fill(null), entrustedGroups: Array(2).fill(null) },
      { role: 'VIG', qty: 6, assignedIds: Array(6).fill(null), entrustedGroups: Array(6).fill(null) }
    ],
    approvedByAdmin: false,
    isOlympic: true
  }
];

export const STATUS_UI: Record<string, { color: string, text: string, label: string }> = {
  [EventStatus.IN_COMPILAZIONE]: { color: 'bg-orange-50 border-orange-200', text: 'text-orange-600', label: 'IN COMPILAZIONE' },
  [EventStatus.ATTESA_APPROVAZIONE]: { color: 'bg-blue-50 border-blue-200', text: 'text-blue-600', label: 'ATTESA APPROVAZIONE' },
  [EventStatus.APPROVATO]: { color: 'bg-emerald-50 border-emerald-200', text: 'text-emerald-600', label: 'APPROVATO' },
  [EventStatus.CRITICO]: { color: 'bg-red-50 border-red-200', text: 'text-red-600', label: 'CRITICO' },
  [EventStatus.COMPLETATO]: { color: 'bg-slate-50 border-slate-200', text: 'text-slate-600', label: 'COMPLETATO' },
};
