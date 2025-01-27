// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "¿Cuál de los siguientes grupos de antibióticos actúa inhibiendo la replicación del ADN?",
    "answer": "Fluoroquinolonas",
    "options": [
      "Macrólidos",
      "Polimixinas",
      "Glicopéptidos",
      "Sulfonamidas",
      "Fluoroquinolonas"
    ]
  },
  {
    "numb": 2,
    "question": "¿Cuál de los siguientes agentes de meningitis está incluido en la vacuna pentavalente que se administra en el esquema de vacunación universal de Uruguay?",
    "answer": "Haemophilus influenzae tipo b",
    "options": [
      "Varicela virus",
      "Neisseria meningitidis",
      "Streptococcus pneumoniae",
      "Haemophilus influenzae tipo b"
    ]
  },
  {
    "numb": 3,
    "question": "¿Cuál de los siguientes microorganismos es el agente más frecuente de meningitis en recién nacidos?",
    "answer": "Streptococcus agalactiae",
    "options": [
      "Escherichia coli",
      "Neisseria meningitidis",
      "Listeria monocytogenes",
      "Streptococcus agalactiae",
      "Streptococcus pneumoniae"
    ]
  },
  {
    "numb": 4,
    "question": "Para la realización del coprocultivo se utiliza el medio SalmonellaShigella (SS), ¿Cuáles colonias deberían estudiarse para confirmar que se trata de Shigella? ",
    "answer": "Las colonias lactosa negativas sulfhídrico negativas",
    "options": [
      "Las colonias lactosa negativas sulfhídrico negativas",
      "Las colonias lactosa negativas sulfhídrico positivas",
      "Las colonias lactosa positivas sulfhídrico negativas",
      "Las colonias lactosa positivas sulfhídrico positivas"
    ]
  },
  {
    "numb": 5,
    "question": ") Escherichia coli responsable de casos de diarrea en seres humanos se divide clásicamente en diferentes patotipos. Uno de ellos es conocido como Enteropatógeno Clásico típico (EPEC-t). ¿Cuál de las siguientes características explica su capacidad para producir daño?   ",
    "answer": "La modificación del citoesqueleto de la célula huésped producto de la inyección de proteínas bacterianas",
    "options": [
      "La invasión de las células del huésped que desencadena su destrucción",
      "La secreción de toxinas que alteran las bombas de sodio y cloro en el intestino",
      "La acción directa de su cápsula de naturaleza proteica que desencadena respuesta inflamatoria",
      "La modificación del citoesqueleto de la célula huésped producto de la inyección de proteínas bacterianas"
    ]
  },
  {
    "numb": 6,
    "question": "¿Cuál de los siguientes factores de virulencia permite la adhesión e invasión de Escherichia coli uropatogénica (UPEC) al epitelio vesical?",
    "answer": "Pili tipo 1",
    "options": [
      "Binding forming pillus (BFP)",
      "Pili tipo 1",
      "Pili tipo P",
      "Intimina"
    ]
  },
  {
    "numb": 7,
    "question": "Concurre a control una paciente que recibió tratamiento con penicilina hace 3 meses por diagnóstico de sífilis. ¿Cuál de los siguientes estudios solicitaría para evaluar la respuesta al tratamiento?",
    "answer": "Venereal Disease Research Laboratory (VDRL)",
    "options": [
      "Pruebas rápidas inmunocromatográficas",
      "Venereal Disease Research Laboratory (VDRL)",
      "Treponema Pallidum Haemagglutination Assay (TPH)",
      "Fluorescent Treponemal Antibody Absorption Test (FTA-Abs)"
    ]
  },
  {
    "numb": 8,
    "question": "¿Cuál de los siguientes resultados del examen microscópico directo a partir de un exudado uretral con tinción de Gram orienta a una uretritis gonocóccica?   ",
    "answer": "Células PMN y diplococos gram negativos intra y extracelulares",
    "options": [
      "Células PMN y diplococos gram negativos intra y extracelulares",
      "Células PMN y diplococos gram positivos intra y extracelulares",
      "Células epiteliales y diplococos gram positivos intracelulares",
      "Células epiteliales y diplococos gram negativos extracelulares"
    ]
  },
  {
    "numb": 9,
    "question": "¿Cuál de las siguientes estructuras de superficie le confiere a Mycoplasma pneumoniae resistencia a la lisis osmótica?",
    "answer": "Esteroles en la membrana celular",
    "options": [
      "Esteroles en la membrana celular",
      "Peptidoglicano por fuera de la membrana",
      "Puentes disulfuro entre proteínas de membrana",
      "Cápsula polisacarídica por fuera de la membrana"
    ]
  },
  {
    "numb": 10,
    "question": "¿Cuál de los siguientes exámenes microbiológicos le permitirían confirmar rápidamente el diagnóstico de una enfermedad tuberculosa?   ",
    "answer": "Baciloscopía o PCR en tiempo real",
    "options": [
      "Baciloscopía o PCR en tiempo real",
      "Cultivo en medios líquidos o sólidos",
      "Adenosin deaminasa (AD en muestra de esputo",
      "Prueba de la tuberculina (PPD)",
      "o pruebas de liberación de interferón Gamma (IGR)"
    ]
  },
{
    "numb": 11,
    "question": "El virus Influenza se caracteriza por presentar variaciones antigénicas. Se define que ocurrió un salto antigénico cuando:",
    "answer": "Ocurre reordenamiento entre segmentos de ARN homólogos que provienen de distintos virus que coinfectan una misma célula",
    "options": [
      "Ocurre reordenamiento entre segmentos de ARN en regiones codificantes de proteínas de la nucleocápside",
      "Ocurre reordenamiento entre segmentos de ARN homólogos que provienen de distintos virus que coinfectan una misma célula",
      "Ocurren mutaciones sin sentido en el gen que codifica para la neuraminidasa determinando la síntesis de una proteína truncada",
      "Ocurren mutaciones puntuales en el gen codificante de la hemaglutinina que cambian aminoácidos determinantes en la función de esa proteína"
    ]
  },
  {
    "numb": 12,
    "question": "Oseltamivir es un antiviral que se utiliza en algunas situaciones para el tratamiento de la infección causada por el virus Influenza. ¿Cuál es su mecanismo de acción?",
    "answer": "inhibe selectivamente a la neuraminidasa",
    "options": [
      "inhibe selectivamente a la hemaglutinina",
      "inhibe selectivamente a la neuraminidasa",
      "Inhibe la ADN polimerasa viral actuando como análogo de nucleósido",
      "inhibe la ARN polimerasa viral actuando como inhibidor no nucleosídico"
    ]
  },
  {
    "numb": 13,
    "question": "¿Cuál es la consecuencia de que S. aureus sintetice la variante PBP2a durante el tratamiento con cefalosporinas de 1a generación?   ",
    "answer": "continuar transpeptidando aún en presencia del betalactámico",
    "options": [
      "hidrolizar el betalactámico en el anillo común que poseen",
      "continuar transpeptidando aún en presencia del betalactámico",
      "generar una barrera para que no acceda al sitio blanco el antibiótico"
    ]
  },
  {
    "numb": 14,
    "question": "Las betalactamasas de espectro extendido hidrolizan:  ",
    "answer": "Solo penicilinas, cefalosporinas de 1era, 2da y 3era generación",
    "options": [
      "Solo penicilinas y cefalosporinas de 1era generación",
      "Solo cefalosporinas de 1era y 2da generación",
      "Solo penicilinas, cefalosporinas de 1era, 2da y 3era generación",
      "Todas las cefalosporinas y los carbapenems pero no las penicilinas",
      "Todas las penicilinas, cefalosporinas y carbapenems"
    ]
  },
  {
    "numb": 15,
    "question": "¿En cuál de las siguientes situaciones la infección por el virus de la Hepatitis B tiene mayor riesgo de evolucionar a la cronicidad?   ",
    "answer": "Recién nacido con infección adquirida por vía transplacentaria",
    "options": [
      "Embarazada con infección adquirida por vía sexual",
      "Recién nacido con infección adquirida por vía transplacentaria",
      "Portador de VIH con recuento linfocitario normal adquirida por vía sanguínea"
    ]
  },
  {
    "numb": 16,
    "question": "¿Cuál de las siguientes parasitosis representa una enfermedad parasitaria transmitida por alimentos (EPTA) ?   ",
    "answer": "Toxoplasmosis",
    "options": [
      "Escabiosis",
      "Leishmaniasis",
      "Toxoplasmosis",
      "Estrongiloidiasis"
    ]
  },
  {
    "numb": 17,
    "question": "¿Cuál de las siguientes parasitosis puede ser transmitida de forma vertical y vectorial?   ",
    "answer": "Enfermedad de Chagas",
    "options": [
      "Hidatidosis",
      "Toxoplasmosis",
      "Distomatosis hepática",
      "Enfermedad de Chagas"
    ]
  },
  {
    "numb": 18,
    "question": "¿Cuál de los siguientes helmintos tiene formas de vida libre en su ciclo de vida?   ",
    "answer": "Strongyloides stercoralis",
    "options": [
      "Toxocara canis",
      "Ascaris lumbricoides",
      "Strongyloides stercoralis",
      "Echinococcus granulosus"
    ]
  },
  {
    "numb": 19,
    "question": "Las anfixenosis son infecciones transmitidas:",
    "answer": "Entre el humano y otros vertebrados en ambas direcciones",
    "options": [
      "Entre el humano y otros vertebrados en ambas direcciones",
      "Desde el humano en dirección a otros vertebrados",
      "Desde otros vertebrados en dirección al humano",
      "Desde el humano en dirección a invertebrados",
      "Desde invertebrados en dirección al humano"
    ]
  },
  {
    "numb": 20,
    "question": "¿Cuál de los siguientes Dermatofitos es un Dermatofito Antropofílico?   ",
    "answer": "Epidermophyton floccosum",
    "options": [
      "Microsporum canis",
      "Trichophyton verrucosum",
      "Epidermophyton floccosum",
      "Nannizzia gypsea (anteriormente Microsporum gypseum)"
    ]
  },
 {
    "numb": 21,
    "question": "La metamorfosis holometábola es aquella que comprende los siguientes estadios:   ",
    "answer": "huevo, larva, pupa y adulto",
    "options": [
      "larva, ninfa y adulto",
      "huevo, pupa y adulto",
      "huevo, ninfa y adulto",
      "huevo, larva, pupa y adulto"
    ]
  },
  {
    "numb": 22,
    "question": "¿Qué vector transmite la Leishmaniasis Visceral en Uruguay?   ",
    "answer": "Lutzomyia longipalpis",
    "options": [
      "Aedes aegypti",
      "Triatoma infestans",
      "Lutzomyia longipalpis",
      "Cochliomyia hominivorax"
    ]
  },
  {
    "numb": 23,
    "question": "¿Cuál es el principal determinante epidemiológico en la transmisión de enteroparasitosis?   ",
    "answer": "Carecer de saneamiento",
    "options": [
      "Jugar en areneros",
      "Carecer de saneamiento",
      "Contacto con perros y gatos",
      "Caminar descalzo en el barro",
      "Comer carne ovina poco cocida"
    ]
  },
  {
    "numb": 24,
    "question": "¿Qué metodología se utiliza para el diagnóstico de Criptococosis en el examen microscópico directo de una muestra de Líquido cefalorraquídeo?   ",
    "answer": "Tinta china",
    "options": [
      "Giemsa",
      "Tinta china",
      "Tinción de Gram",
      "Hidróxido de potasio"
    ]
  },
  {
    "numb": 25,
    "question": "¿Cuál de las siguientes formas clínicas, tiene como agente etiológico a Malassezia spp?   ",
    "answer": "Foliculitis",
    "options": [
      "Foliculitis",
      "Herpes circinado",
      "Querión de Celso",
      "Eccema marginado de Hebra"
    ]
  },
  {
    "numb": 26,
    "question": "¿Cuál es la principal característica patogénica de los dermatofitos?   ",
    "answer": "Queratinofilia",
    "options": [
      "Lipofilia",
      "Lipolisis",
      "Queratinofilia",
      "Melanodermia"
    ]
  },
  {
    "numb": 27,
    "question": "¿Cuál es la forma infectante de Taenia saginata para el hospedero intermediario?   ",
    "answer": "El huevo contenido en las proglótides grávidas eliminadas por el hospedero definitivo.",
    "options": [
      "El escólex eliminado a través de las heces del hospedero intermediario.",
      "El estadio larvario o cisticerco, que se encuentra en el hospedero definitivo.",
      "El huevo contenido en las proglótides grávidas eliminadas por el hospedero definitivo.",
      "El quiste maduro eliminado a través de las heces del hospedero intermediario."
    ]
  },
  {
    "numb": 28,
    "question": "En un paciente con hipopotasemia ¿Cuál de los siguientes valores de potasio urinario es compatible con pérdidas renales de potasio?   ",
    "answer": "15 mEq/L.",
    "options": [
      "1 mEq/L.",
      "5 mEq/L.",
      "10 mEq/L.",
      "15 mEq/L."
    ]
  },
  {
    "numb": 29,
    "question": "¿Cuál de los siguientes es un estímulo no osmótico para la secreción de hormona antidiurética?   ",
    "answer": "Dolor.",
    "options": [
      "Hipo.",
      "Dolor.",
      "Diarrea.",
      "Calambres."
    ]
  },
  {
    "numb": 30,
    "question": "¿Cuál de los siguientes factores está implicado en el desarrollo de la insuficiencia cardíaca crónica con FEVI reducida (ICFEVIr)?   ",
    "answer": "Menor masa miocitaria.",
    "options": [
      "Menor estrés oxidativo.",
      "Menor tensión parietal.",
      "Menor masa miocitaria.",
      "Descenso de la Angiotensina plasmática"
    ]
  },
  {
    "numb": 31,
    "question": "Ante un descenso de la disponibilidad sistémica de oxígeno (DO2), ¿qué efecto tiene el aumento de la extracción periférica (EO2)?   ",
    "answer": "El consumo de O2 se mantiene estable",
    "options": [
      "El consumo de O2 se mantiene estable",
      "Aumenta el contenido venoso de O2 (CvO2).",
      "Se activa el metabolismo celular en anaerobiosis.",
      "Desciende la diferencia arterio – venosa de O2 (DavO2)."
    ]
  },
  {
    "numb": 32,
    "question": "¿Qué alteración es característica del síndrome cardiohepático asociado a la insuficiencia cardíaca aguda (ICA)?",
    "answer": "Aumento de la concentración plasmática de la alanino aminotransferasa.",
    "options": [
      "Aumento de la albúmina sérica.",
      "Descenso de los valores de bilirrubina total.",
      "Aumento de la concentración plasmática de la alanino aminotransferasa.",
      "Ascitis con una concentración de proteínas en el líquido peritoneal menor 2.5 g%."
    ]
  },
  {
    "numb": 33,
    "question": "Una paciente de 70 años, tabaquista intensa, concurre a control con los siguientes resultados de una espirometría forzada: Pre-broncodilatador: Volumen espirado en el 1er segundo (VEF1): 3,31 L. Capacidad vital forzada (CVF): 6,09 L. Post-broncodilatador: Volumen espirado en el 1er segundo (VEF1): 3,48 L. Capacidad vital forzada (CVF): 6,25 L. ¿Cuál de las siguientes opciones explica mejor las alteraciones observadas?  ",
    "answer": "Patrón espirométrico obstructivo.",
    "options": [
      "Patrón espirométrico obstructivo.",
      "Limitación reversible al flujo espiratorio.",
      "Respuesta significativa a los broncodilatadores.",
      "Aumento de la presión de retroceso elástico pulmonar."
    ]
  },
  {
    "numb": 34,
    "question": "Un paciente de 31 años, sexo masculino, respirando espontáneamente al aire y a nivel del mar, presenta la siguiente gasometría: pH 7,31, PaO2 75, PaCO2 30, HCO3- 22. Luego de 30 min con oxigenoterapia de alto flujo (FiO2=1) no presenta mejoría de la oxemia. ¿Qué mecanismo de insuficiencia respiratoria presenta?   ",
    "answer": "Shunt intrapulmonar.",
    "options": [
      "Shunt intrapulmonar.",
      "Hipoventilación alveolar.",
      "Alteración de la difusión.",
      "Aumento del espacio muerto.",
      "Descenso de la relación ventilación/perfusión."
    ]
  },
  {
    "numb": 35,
    "question": "En el marco de los efectos sistémicos de la inflamación, la respuesta de fase aguda implica cambios fisiopatológicos y conductuales que son mediados por las citocinas inflamatorias. ¿Cuál de los siguientes es uno de esos cambios?   ",
    "answer": "Anemia por producción de hepcidina.",
    "options": [
      "Aumento de la ingesta de alimentos.",
      "Aumento de la síntesis de albúmina.",
      "Anemia por producción de hepcidina.",
      "Descenso en la producción de leucocitos."
    ]
  },
  {
    "numb": 36,
    "question": "Frente a una acidosis metabólica, el riñón responde aumentando la reabsorción del bicarbonato filtrado. ¿Hasta qué porcentaje del bicarbonato filtrado puede llegar a reabsorberse en respuesta a esta acidosis?   ",
    "answer": "0,1 %.",
    "options": [
      "0,1 %.",
      "2 %.",
      "5 %.",
      "10 %."
    ]
  },
  {
    "numb": 37,
    "question": "En referencia a la patogenia de la encefalopatía hepática ¿Cuál de los siguientes es un factor predisponente para la misma?   ",
    "answer": "Presencia de shunts portosistémicos.",
    "options": [
      "Insuficiencia renal.",
      "Hiperbilirrubinemia.",
      "Presencia de shunts portosistémicos.",
      "Ingesta de una dieta rica en proteínas."
    ]
  },
  {
    "numb": 38,
    "question": "¿Qué eventos caracterizan la fase de extensión de la insuficiencia renal aguda por injuria renal aguda isquémica?   ",
    "answer": "Lesión microvascular e inflamación.",
    "options": [
      "Lesión microvascular e inflamación.",
      "Vasoconstricción y lesión por isquemia renal.",
      "Concomitancia de eventos de lesión y cicatrización."
    ]
  },
  {
    "numb": 39,
    "question": "¿Cuál de las siguientes situaciones aumenta el flujo plasmático renal y por consiguiente produce hiperfiltración?   ",
    "answer": "Dieta con carga elevada de proteínas de origen animal.",
    "options": [
      "Presión arterial de 110/70 mmHg.",
      "Dieta con carga elevada de proteínas de origen animal.",
      "Uso de inhibidores de la enzima conversora de angiotensina II.",
      "Uso de inhibidores de los transportadores de glucosa-SGLT2."
    ]
  },
  {
    "numb": 40,
    "question": "Un paciente ingresa al servicio de emergencia con un infarto agudo de miocardio. Del examen físico se destaca hipotensión arterial, livideces, relleno capilar lento e ingurgitación yugular. Indique cuál considera el principal responsable del shock de acuerdo a este cuadro clínico:   ",
    "answer": "Disminución del inotropismo.",
    "options": [
      "Disminución de la precarga cardíaca.",
      "Disminución del inotropismo.",
      "Vasodilatación periférica.",
      "Disfunción mitocondrial."
    ]
  },
  {
    "numb": 41,
    "question": "Un pilar en el tratamiento de los accidentes cerebrovasculares isquémicos es la prevención de la injuria cerebral secundaria. ¿Cuál es el principal objetivo de esta medida?   ",
    "answer": "Preservar la viabilidad celular en el área de penumbra isquémica.",
    "options": [
      "Disminuir la presión intracraneana.",
      "Aumentar el flujo sanguíneo cerebral.",
      "Revertir la lesión celular en el core isquémico.",
      "Preservar la viabilidad celular en el área de penumbra isquémica."
    ]
  },
  {
    "numb": 42,
    "question": "Señale la afirmación correcta sobre los parámetros de absorción de un fármaco X administrado en dosis única por vía oral:   ",
    "answer": "La velocidad de absorción depende, entre otras variables, de la forma farmacéutica.",
    "options": [
      "La biodisponibilidad es un parámetro independiente de la fisiología o patología del individuo",
      "El pico máximo de concentración plasmática (Cmax) es independiente de la dosis administrada.",
      "La velocidad de absorción depende, entre otras variables, de la forma farmacéutica.",
      "El tiempo al pico de concentración máxima (t max) es independiente de la velocidad de absorción."
    ]
  },
  {
    "numb": 43,
    "question": "¿Cuál de los siguientes betabloqueantes es cardioselectivo?   ",
    "answer": "Atenolol.",
    "options": [
      "Atenolol.",
      "Labetalol.",
      "Carvedilol.",
      "Propranolol."
    ]
  },
  {
    "numb": 44,
    "question": "Fenitoína (o difenilhidantoín  es un fármaco antiepiléptico que en niveles plasmáticos terapéuticos elevados cambia su cinética de eliminación a orden cero. Esto significa que:   ",
    "answer": "La cantidad de moléculas del fármaco que se eliminan por minuto es constante.",
    "options": [
      "La vida media plasmática del fármaco permanece constante, no cambia.",
      "La cantidad de moléculas del fármaco que se eliminan por minuto es constante.",
      "A mayor concentración plasmática se elimina menor cantidad de moléculas por minuto.",
      "El riesgo de intoxicación farmacológica es menor que en la cinética de primer orden."
    ]
  },
  {
    "numb": 45,
    "question": "¿Cuál de los siguientes grupos farmacológicos puede producir reacciones adversas explicables por antagonismo muscarínico?   ",
    "answer": "Antihistamínicos de primera generación.",
    "options": [
      "Antibióticos macrólidos.",
      "Cefalosporinas de segunda generación.",
      "Antihistamínicos de primera generación.",
      "Antiinflamatorios no esteroideos tipo coxib."
    ]
  },
  {
    "numb": 46,
    "question": "Isopropamida es uno de los principios activos de varios medicamentos combinados a dosis fijas, utilizados para tratar síntomas funcionales digestivos. Señale cuál es su mecanismo de acción:  ",
    "answer": "Antagonista competitivo de receptores muscarínicos.",
    "options": [
      "Agonista nicotínico a nivel del plexo mientérico.",
      "Agonista parcial de receptores alfa1 adrenérgicos.",
      "Antagonista competitivo de receptores muscarínicos.",
      "Antagonista competitivo de receptores beta1 adrenérgicos."
    ]
  },
  {
    "numb": 47,
    "question": "En base a la respuesta anterior, ¿cuál de las siguientes es una reacción adversa tipo A característica del uso de isopropamida? ",
    "answer": "Arritmias cardíacas",
    "options": [
      "Broncoespasmo",
      "Arritmias cardíacas",
      "Incontinencia urinaria",
      "Miosis (pupilas puntiformes)"
    ]
  },
  {
    "numb": 48,
    "question": "¿Cuál de las siguientes afirmaciones nos puede orientar a pensar que una persona ha desarrollado tolerancia a los efectos terapéuticos del diazepam?   ",
    "answer": "Nota que la misma dosis diaria produce menor efecto.",
    "options": [
      "Al inicio le producía náuseas y vómitos, ahora no.",
      "Si no lo ingiere, no puede dormir adecuadamente.",
      "Nota que la misma dosis diaria produce menor efecto.",
      "Necesita beber más líquidos que antes para recuperarse."
    ]
  },
  {
    "numb": 49,
    "question": "¿Cuál es el mecanismo que explica las náuseas y vómitos que pueden producirse luego de la administración de morfina?   ",
    "answer": "Activación de la zona quimiorreceptora gatillo del área postrema bulbar.",
    "options": [
      "Disminución del tono pilórico y del esfínter esofágico inferior.",
      "Activación de la zona quimiorreceptora gatillo del área postrema bulbar.",
      "Estimulación de receptores nicotínicos a nivel diafragmático (vagal) y gástrico.",
      "Aumento de la producción de ácido clorhídrico y alteración de la barrera mucosa gástrica"
    ]
  },
  {
    "numb": 50,
    "question": "¿Cuál de las siguientes afirmaciones sobre el mecanismo general de acción de los antivirales es correcta?   ",
    "answer": "Actúan inhibiendo alguna fase del ciclo de replicación viral.",
    "options": [
      "Actúan inhibiendo la síntesis proteica en la partícula viral",
      "Actúan inhibiendo alguna fase del ciclo de replicación viral.",
      "Actúan fundamentalmente sobre la fase latente de los virus.",
      "Actúan estimulando el estado de resistencia antiviral de las células humanas"
    ]
  },
  {
    "numb": 51,
    "question": "¿Cuál de los siguientes fármacos es de elección para el tratamiento de la toxoplasmosis aguda en una mujer embarazada de 28 años con 10 semanas de gestación?   ",
    "answer": "Espiramicina.",
    "options": [
      "Ampicilina.",
      "Trimetoprim.",
      "Sulfadiazina.",
      "Espiramicina."
    ]
  },
  {
    "numb": 52,
    "question": "¿Cuál de los siguientes fármacos administrado por vía intravenosa puede ocasionar reacciones adversas mediadas por liberación de histamina?",
    "answer": "Morfina.",
    "options": [
      "Morfina.",
      "Ceftriaxona.",
      "Gentamicina.",
      "Difenhidramina."
    ]
  },
  {
    "numb": 53,
    "question": "¿Cuál de las siguientes interacciones se dará con mayor probabilidad al utilizar radiación electromagnética con energías mayores a 1,02Mev?   ",
    "answer": "formación de pares",
    "options": [
      "efecto Compton",
      "colisión inelástica",
      "formación de pares",
      "efecto fotoeléctrico"
    ]
  },
  {
    "numb": 54,
    "question": "¿Cuál de las siguientes opciones indica una característica de los efectos determinísticos de las radiaciones ionizantes?   ",
    "answer": "se dan a partir de una dosis umbral",
    "options": [
      "se dan a partir de una dosis umbral",
      "se manifiestan a largo plazo (años)",
      "son al azar e independientes de la dosis",
      "están relacionados con la transformación celular"
    ]
  },
  {
    "numb": 55,
    "question": "¿Cuál de las siguientes opciones es correcta para la manifestación hematopoyética del síndrome agudo de radiación (SRA)?",
    "answer": "se desarrolla con dosis entre 1 y 10 Gy",
    "options": [
      "tiene un periodo de latencia de 6 meses",
      "se desarrolla con dosis entre 1 y 10 Gy",
      "se observa pancitopenia con dosis de 20 mGy",
      "la fase prodrómica se da 4 semanas post-irradiación"
    ]
  },
  {
    "numb": 56,
    "question": "¿Qué significado tiene el concepto de ALARA en radioprotección?   ",
    "answer": "indica el uso de una dosis tan baja como razonablemente sea posible",
    "options": [
      "marca los límites de dosis para personal ocupacionalmente expuesto",
      "indica el uso de una dosis tan baja como razonablemente sea posible",
      "indica el valor de referencia de dosis para los pacientes en tratamiento",
      "marca la relación coste/beneficio que debe realizar el médico prescriptor"
    ]
  },
  {
    "numb": 57,
    "question": "Con respecto al proceso de reparación tisular luego de una lesión, hablamos de regeneración cuando:   ",
    "answer": "Las células residuales proliferan para reemplazar el tejido lesionado",
    "options": [
      "Se forma una cicatriz",
      "Existen extensos depósitos de colágeno",
      "Las células residuales proliferan para reemplazar el tejido lesionado",
      "Las células residuales aumentan de tamaño para recuperar el tejido lesionado"
    ]
  },
  {
    "numb": 58,
    "question": "La inflamación crónica inespecífica se caracteriza por un infiltrado inflamatorio compuesto por:   ",
    "answer": "Linfocitos, plasmocitos y macrófagos",
    "options": [
      "Linfocitos, plasmocitos y macrófagos",
      "Leucocitos polimorfonucleares y fibrina, sin necrosis",
      "Neutrófilos con formación de abscesos, extensa hemorragia y necrosis",
      "Linfocitos, histiocitos epitelioides y células gigantes de tipo Langhans, asociado a necrosis de tipo caseoso"
    ]
  },
  {
    "numb": 59,
    "question": "En relación con las capacidades proliferativas de los tejidos ¿Cuál de las siguientes afirmaciones es correcta?   ",
    "answer": "Los tejidos lábiles se dividen continuamente",
    "options": [
      "Los tejidos lábiles se dividen continuamente",
      "Los tejidos permanentes se regeneran rápido",
      "Los tejidos estables se dividen continuamente",
      "Los tejidos estables no pueden regenerarse"
    ]
  },
  {
    "numb": 60,
    "question": "¿Cuál de los siguientes fenómenos tiene invariablemente un significado patológico?   ",
    "answer": "Necrosis",
    "options": [
      "Atrofia",
      "Necrosis",
      "Apoptosis",
      "Hiperplasia"
    ]
  }

];