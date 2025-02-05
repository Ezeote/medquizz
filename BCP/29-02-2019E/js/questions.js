// creating an array and passing the number, questions, options, and answers
let questions = [
  {
  "numb": 1,
  "question": "Paciente de sexo masculino de 45 años, sin antecedentes personales patológicos a destacar. Consulta por fiebre, astenia, adinamia, artromialgias generalizadas de 15 días de evolución, agregando hace 24 hs ictericia de piel y mucosas y coluria.<br> Al examen se destaca ictericia de piel y mucosas y hepatomegalia dolorosa. Los resultados de los marcadores serológicos para detectar infección por virus de hepatitis son los siguientes: <br>IgM anti-VHA + <br>HBsAg –, anti-HBs +, anti-HBc – <br>anti-VHC – <br>El paciente está cursando una hepatitis A. En cuanto a los marcadores para hepatitis B lo más probable es que el paciente:",
  "answer": "Este vacunado para hepatitis B",
  "options": [
  "Tenga una coinfección con el virus de hepatitis B",
  "Haya cursado anteriormente una hepatitis B",
  "Este vacunado para hepatitis B",
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 2,
  "question": "La listeriosis puede producir infección del sistema nervioso central ¿Cuál de las siguientes medidas disponibles pueden prevenir el desarrollo de esta enfermedad?",
  "answer": "Cocción adecuada de alimentos",
  "options": [
  "Quimioprofilaxis a los contactos de los casos de listeriosis",
  "Vacunación universal",
  "Cocción adecuada de alimentos",
  "Uso de preservativo en relaciones sexuales"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 3,
  "question": "¿Cuál es el principal reservorio de Neisseria meningitidis?",
  "answer": "La nasofaringe del ser humano",
  "options": [
  "La nasofaringe del ser humano",
  "El tracto gastrointestinal de los niños",
  "El tracto respiratorio de distintos mamíferos",
  "El medio ambiente"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 4,
  "question": "Para establecer el diagnóstico etiológico en un paciente con corrimiento uretral se realiza un exudado uretral. Si se tratara de una gonorrea ¿qué se observaría en el examen microscópico directo luego de la tinción de Gram?",
  "answer": "Leucocitos polimorfonucleares y diplococos Gram negativos intra y extra celulares",
  "options": [
  "Leucocitos polimorfonucleares y diplococos Gram negativos intra y extra celulares",
  "Leucocitos polimorfonucleares y diplococos Gram positivos extra celulares",
  "Células epiteliales y leucocitos polimorfonucleares rodeados de bacilos Gram negativos",
  "Células epiteliales y diplococos Gram negativos y Gram positivos intracelulares"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 5,
  "question": "¿Cuál de las siguientes pruebas es de utilidad para el diagnóstico etiológico en una lesión genital compatible con un chancro sifilítico?",
  "answer": "Trepoinvestigación de lesiones en microscopio de campo oscuro",
  "options": [
  "Trepoinvestigación de lesiones en microscopio de campo oscuro",
  "Cultivo de lesiones en medios bacteriológicos ricos y selectivos como el Thayer Martin",
  "Preparación de frotis con tinción de Gram para observar las espiroquetas"
  ],
    "discipline": "Bacterio",
  },
  {
  "numb": 6,
  "question": "¿Qué funciones cumple la hemaglutinina (HA) del virus influenza?",
  "answer": "Adsorción y penetración viral",
  "options": [
  "Adsorción y penetración viral",
  "Integración del genoma viral al genoma del hospedero",
  "Maduración de la partícula viral para que sea infectiva",
  "Liberación de las partículas virales de la superficie celular"

    ],
    "discipline": "Bacterio",
  },
{
  "numb": 7,
  "question": "¿Cuál es la muestra adecuada para la investigación de Bordetella pertussis por PCR o cultivo enel diagnóstico de tos convulsa?",
  "answer": "Aspirado nasofaríngeo",
  "options": [
  "Hemocultivo",
  "Sueros pareados",
  "Aspirado nasofaríngeo",
  "Lavado broncoalveolar"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 8,
  "question": "¿Cuál es la manifestación clínica más frecuente del Virus de Epstein Barr?",
  "answer": "Mononucleosis infecciosa",
  "options": [
  "Meningoencefalitis",
  "Cistitis hemorrágica",
  "Mononucleosis infecciosa",
  "Neumonia con insuficiencia respiratoria"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 9,
  "question": "¿Cuál de los siguientes es reservorio de Shigella?",
  "answer": "El intestino humano",
  "options": [
  "Aves",
  "Carne vacuna",
  "El intestino humano",
  "El intestino de diferentes mamíferos"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 10,
  "question": " ¿Cuál de los siguientes factores de virulencia posibilita a E. coli enteropatógena producir cambios en el citoesqueleto del enterocito que se traducen en la lesión de adherencia y borramiento?",
  "answer": "Secreción de proteínas efectoras mediante sistema de secreción de tipo III",
  "options": [
  "Secreción de proteínas efectoras mediante sistema de secreción de tipo III",
  "Producción de toxinas termoestables y termolábiles que actúan sobre receptores de los enterocitos",
  "Adherencia mediante adhesinas fimbriales y no fimbriales manosa resistentes",
  "Multiplicación intracelular con desplazamiento de célula a célula mediada por flagelos"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 11,
  "question": " Considerando que en el antibiograma por la técnica de Kirby Bauer para S. aureus un halo de inhibición > 21 mm implica sensibilidad a clindamicina y que en este antibiograma se obtuvo ausencia de halo de inhibición para eritromicina ¿Cuál de los siguientes resultados en el halo de clindamincina se interpreta cómo resistencia inducible?",
  "answer": "Un halo en forma de D de 25 mm",
  "options": [
  "Ausencia de halo de inhibición",
  "Un halo circular de 15 mm",
  "Un halo circular de 25 mm",
  "Un halo en forma de D de 25 mm"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 12,
  "question": " ¿Cuál es la función de la enzima catalasa presente en S. aureus?",
  "answer": "Protección contra especies tóxicas del oxígeno como el peróxido de hidrógeno",
  "options": [
  "Protección contra especies tóxicas del oxígeno como el peróxido de hidrógeno",
  "Contribuir con la invasión de la bacteria en los tejidos, degradando la fibrina",
  "Actuar como superantígeno estimulando de forma policlonal las células del sistema inmune",
  "Generar poros en las membranas celulares fundamentalmente de eritrocitos"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 13,
  "question": " La presencia de bacterias en orina sin signos ni síntomas clínicos se conoce como bacteriuria asintomática. Señale en cuál de los siguientes casos la bacteriuria asintomática tiene indicación de tratamiento antibiótico.",
  "answer": "Mujeres durante la gestación",
  "options": [
  "Primer episodio en mujeres jóvenes",
  "Mujeres con prolapso uterino",
  "Niños menores de 5 años",
  "Mujeres durante la gestación"
    ],
    "discipline": "Bacterio",
  },
  {
  "numb": 14,
  "question": " La transmisión de Ascaris lumbricoides ocurre por contacto:",
  "answer": "Con suelos contaminados",
  "options": [
  "Directo",
  "Inter-humano",
  "Con animales",
  "Con suelos contaminados"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 15,
  "question": " ¿Cuál de las siguientes presentaciones clínica es característica de las giardiasis?:",
  "answer": "Diarrea crónica",
  "options": [
  "Prurito anal",
  "Diarrea crónica",
  "Sangrado intestinal",
  "Sintomatología respiratoria"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 16,
  "question": " ¿Cuál de las siguientes es un examen adecuado para realizar el diagnóstico etiológico de las dermatofitosis?:",
  "answer": "Microscópico directo y cultivo",
  "options": [
  "Microscópico directo y cultivo",
  "Clínico de piel y faneras",
  "Microscópico de frotis con giemsa y gomori",
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 17,
  "question": " ¿Cuál de los siguientes métodos para el diagnóstico de la hidatidosis es de elección debido a su alta sensibilidad?",
  "answer": "Enzimoinmunoensayo (ELISA)",
  "options": [
  "Doble Difusión de arco 5 (DD5)",
  "Enzimoinmunoensayo (ELISA)",
  "Ecografía abdominal",
  "Inmunofluorescencia directa"
   ],
     "discipline": "Parasito",
  },
  {
  "numb": 18,
  "question": " ¿En cuál de las siguientes situaciones la serología para toxoplasmosis presenta menor utilidad?",
  "answer": "Toxoplasmosis encefálicas en inmunodeprimidos",
  "options": [
  "Toxoplasmosis aguda en individuos inmunocompetentes",
  "Serología de la madre en la toxoplasmosis congénita",
  "Toxoplasmosis encefálicas en inmunodeprimidos",
  "Toxoplasmosis linfoganglionares en inmunocompetentes"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 19,
  "question": " En relación con la patogenia de la criptosporidiosis, señale la opción correcta:",
  "answer": "La multiplicación de los trofozoitos en la vacuola parasitófora induce la destrucción del enterocito",
  "options": [
  "El ooquiste se aloja dentro del epitelio intestinal provocando abscesos en botón de camisa",
  "El disco suctorio interviene en la adhesión y colonización del intestino delgado por este agente",
  "Invade el íleon y produce un proceso inflamatorio a nivel de la lámina propia con erosiones en la mucosa",
  "La multiplicación de los trofozoitos en la vacuola parasitófora induce la destrucción del enterocito"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 20,
  "question": " ¿Cuál de las siguientes medidas de prevención es la más adecuada para evitar la oxiurosis?",
  "answer": "Corte y cepillado de uñas",
  "options": [
  "Corte y cepillado de uñas",
  "Lavar bien frutas y verduras que se consumen crudas",
  "Lavarse las manos luego de jugar con mascotas",
  "Evitar consumo de carne de cerdo"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 21,
  "question": " ¿Cuál de los siguientes artrópodos son vectores en la transmisión de la Leishmaniasis?",
  "answer": "Los flebótomos del género Lutzomyia",
  "options": [
  "Los mosquitos del género Aedes",
  "Los flebótomos del género Lutzomyia",
  "Las moscas del género Cochlomyia",
  "Los mosquitos del género Culex"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 22,
  "question": " En cuanto a la morfología de los dermatofitos marque la opción correcta:",
  "answer": "Se trata de hongos filamentosos",
  "options": [
  "Se trata de hongos dimorfos",
  "Se trata de hongos filamentosos",
  "Presentan una cápsula polisacárida",
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 23,
  "question": " ¿Cuál de las siguientes características morfológicas microscópicas se observan en Histoplasmosis?",
  "answer": "Levaduras pequeñas intracelulares",
  "options": [
  "Filamentos de tipo moho en el directo de las lesiones",
  "Clamidosporos verrucosos en cultivos a 37°c",
  "Levaduras pequeñas intracelulares",
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 24,
  "question": " En la clínica de la neumonia por Pneumocystis jirovecii, es característico:",
  "answer": "La insuficiencia respiratoria",
  "options": [
  "La condensación a bronquio-permeable",
  "La necrosis pulmonar",
  "Derrame pleural",
  "La insuficiencia respiratoria"
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 25,
  "question": " Con respecto a la morfología de Cryptococcus spp., marque lo correcto:",
  "answer": "Las levaduras producen una cápsula de polisacáridos",
  "options": [
  "Son levaduras multibrotantes en rueda de timón",
  "En los cultivos los filamentos originan macroconidios fusiformes",
  "Las levaduras producen una cápsula de polisacáridos",
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 26,
  "question": " En cuál de las siguientes situaciones está indicada la serología como pesquisa de la enfermedad Chagas:",
  "answer": "En todas las mujeres embarazadas en Uruguay",
  "options": [
  "Sólo en embarazadas que vivan en zona endémica",
  "En todas las mujeres embarazadas en Uruguay",
  "En todo recién nacido hijo de madre chagásica",
    ],
    "discipline": "Parasito",
  },
  {
  "numb": 27,
  "question": " Respecto a la relación Consumo/Disponibilidad de Oxígeno (VO2/DO2), cuando la disponibilidad cae por debajo del punto crítico (DO2crit), se observa:",
  "answer": "Un descenso del consumo de O2con metabolismo anaeróbico.",
  "options": [
  "Un aumento compensatorio del consumo de O2.",
  "Disminución del lactato a nivel tisular.",
  "Un descenso del consumo deO2 pero se mantiene el metabolismo aeróbico.",
  "Un descenso del consumo de O2con metabolismo anaeróbico."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 28,
  "question": " En un paciente con Hipoxemia por alteraciones del intercambio pulmonar de gases (PaO2 = 60 mm Hg) y Hemoglobina normal, la saturación de hemoglobina se estima en:",
  "answer": "90 %",
  "options": [
  "45 %",
  "60 %",
  "90 %",
  "98 %"
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 29,
  "question": " Se muestran los datos de una paciente de 20 años, diabética, que ingresa al hospital con una descompensación de su diabetes con hiperglicemia y cetonemia ++. Gasometría arterial (ventilando espontáneamente al aire) <br>PaO2: 90 mmHg <br>PaCO2: 36 mmHg <br>pH: 7,3 <br>HCO3: 18 mEq/l. <br>Natremia 142 mEq/l; <br>Cloremia 100mEq/L <br>El agujero aniónico en este ejemplo es de:",
  "answer": "24,0",
  "options": [
  "42,0",
  "24,0",
  "16,7",
  "10,7"
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 30,
  "question": " En la paciente de la historia anterior, ¿qué diagnóstico realiza respecto al equilibrio ácido base?",
  "answer": "Acidosis metabólica con anión gap aumentado.",
  "options": [
  "Acidosis metabólica con anión gap aumentado.",
  "Acidosis metabólica con anión gap normal.",
  "Alcalosis metabólica.",
  "Trastorno mixto por acidosis metabólica y alcalosis respiratoria."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 31,
  "question": " ¿A qué receptores se unen las preparaciones de la planta Cannabis Sativa para ejercer sus acciones analgésicas? Señale la opción correcta:",
  "answer": "Receptores CB1y CB2.",
  "options": [
  "Receptores CB1y CB2.",
  "Receptores µ.",
  "Receptores NMDA.",
  "No se han identificado receptores propios."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 32,
  "question": " Se realiza la siguiente gasometría (ventilando espontáneamente al aire) a un paciente diabético que consulta en emergencia con un neumotórax traumático: <br>PaO2: 55 mmHg <br>PaCO2: 70 mmHg <br>pH 7,25 <br>HCO -: 26mEq/L <br>¿Cuál es su diagnóstico gasométrico?:",
  "answer": "Presenta una acidosis respiratoria aguda.",
  "options": [
  "Presenta una acidosis mixta, respiratoria y metabólica.",
  "Presenta una acidosis respiratoria aguda.",
  "Presenta una acidosis respiratoria aguda, con normoxemia.",
  "El bicarbonato aumentado en torno a 4 mEq/L por cada 10 mmHg de incremento de la PaCO2 apoya el carácter agudo del trastorno."
    ],
    "discipline": "Fisiopato",
  },
{
  "numb": 33,
  "question": " Frente a un paciente cursando un infarto agudo de miocardio, ¿cuál de los siguientes factores podría ampliar el área de isquemia por aumento directo del consumo miocárdico de oxígeno?",
  "answer": "Taquicardia.",
  "options": [
  "Hipotensión arterial.",
  "Taquicardia.",
  "Anemia.",
  "Hipercapnia."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 34,
  "question": " En relación a la fase de extensión de la Injuria Renal Aguda ¿Cuál de las siguientes es una característica de esta fase?",
  "answer": "Injuria de la microcirculación.",
  "options": [
  "Disminución de la producción de endotelina.",
  "Ausencia de flujo parenquimatoso.",
  "Hiperoxia tisular.",
  "Injuria de la microcirculación."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 35,
  "question": " En la anemia inflamatoria que acompaña a la Enfermedad Renal Crónica, ¿Cuál de las siguientes moléculas está aumentada?",
  "answer": "Hepcidina.",
  "options": [
  "Ferroportina.",
  "Hepcidina.",
  "Eritropoyetina.",
  "Vitamina D."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 36,
  "question": " Frente a un paciente con shock con el siguiente perfil hemodinámico: hipotensión arterial, gasto cardíaco elevado y resistencias vasculares sistémicas disminuidas, indique el diagnóstico más probable:",
  "answer": "Trauma raquimedular.",
  "options": [
  "Trauma raquimedular.",
  "Tromboembolismo pulmonar masivo.",
  "Infarto agudo de miocardio.",
  "Hemorragia."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 37,
  "question": " Un paciente con enfermedad pulmonar obstructiva crónica (EPOC) ingresa a emergencia con insuficiencia respiratoria, sin una etiología clara. Del estudio gasométrico se destaca: hipoxemia sin hipercapnia que corrige con oxigenoterapia, diferencia alvéolo-arterial (ventilando al aire) de 25 mmHg. <br>Marque la causa más probable de insuficiencia respiratoria:",
  "answer": "Disbalance V/Q por exacerbación de la EPOC.",
  "options": [
  "Disbalance V/Q por exacerbación de la EPOC.",
  "Shunt por neumonía comunitaria.",
  "Hipoventilación alveolar por depresión de conciencia.",
  "Shunt por infarto pulmonar."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 38,
  "question": " Señale el patrón espirométrico que espera encontrar en un paciente con enfisema pulmonar (EPOC), en cuyo examen físico se destaca la remodelación torácica con hipersonoridad:",
  "answer": "Patrón obstructivo con hiperinsuflación",
  "options": [
  "Patrón mixto (obstructivo y restrictivo)",
  "Patrón obstructivo reversible",
  "Patrón obstructivo irreversible",
  "Patrón obstructivo con hiperinsuflación"
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 39,
  "question": " Un paciente sufre un traumatismo grave de cráneo, presentando como complicación hipertensión endocraneana. Teniendo en cuenta que el paciente presenta autorregulación cerebral conservada, indique la medida que podría disminuir la presión intracraneana:",
  "answer": "Aumento de la presión arterial media.",
  "options": [
  "Disminución de la ventilación minuto.",
  "Transfusión de glóbulos rojos.",
  "Aumento de la presión arterial media.",
  "Reposición con soluciones isotónicas."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 40,
  "question": " En el paciente de la pregunta anterior, ¿qué alteración favorece la lesión secundaria por aumento del consumo metabólico cerebral?",
  "answer": "Hipertermia.",
  "options": [
  "Hiponatremia.",
  "Hipertermia.",
  "Hipercapnia.",
  "Hipoxemia."
    ],
    "discipline": "Fisiopato",
  },
  {
  "numb": 41,
  "question": " Salbutamol produce hipopotasemia como efecto adverso. Señale cuál de los siguientesfármacos utilizados en el tratamiento de la crisis asmática presenta efecto sinérgico con salbutamol sobre el metabolismo del potasio.",
  "answer": "Prednisona",
  "options": [
  "Prednisona",
  "Sulfato de magnesio",
  "Bromuro de ipatropio",
  "Aminofilina",
  ],
    "discipline": "Farmaco",
  },
  {
    "numb": 42,
    "question": "¿Cuál de los siguientes fármacos considera más apropiado para yugular una crisis epiléptica de tipo gran mal?",
    "answer":"Diacepam",
    "options": [
    "Diacepam",
    "Fenobarbital",
    "Ácido valproico",
    "Difenilhidantoína"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 43,
  "question": " ¿Cuál de los siguientes mecanismos de acción se asocia con efecto antiepiléptico?",
  "answer": "Mayor entrada del ion cloro al interior celular",
  "options": [
  "Aumento de frecuencia de apertura de los canales de sodio",
  "Mayor frecuencia de apertura de los canales de calcio",
  "Mayor entrada del ion cloro al interior celular",
  "Estímulo de la recaptación y degradación de GABA"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 44,
  "question": " ¿Cuál de los siguientes fármacos utilizados en el tratamiento del asma presenta menor latencia de acción?",
  "answer": "Bromuro de ipatropio",
  "options": [
  "Fluticasona",
  "Ciclesonida",
  "Bromuro de ipatropio",
  "Montelukast"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 45,
  "question": " ¿Cuál de los siguientes fármacos utilizados en el tratamiento de la crisis asmática es un profármaco?",
  "answer": "Hidrocortisona",
  "options": [
  "Salbutamol",
  "Aminofilina",
  "Hidrocortisona",
  "Sulfato de Magnesio"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 46,
  "question": " ¿Cuál de los siguientes microorganismos NO es cubierto por Penicilina?",
  "answer": "Klebsiella pneumoniae",
  "options": [
  "Streptococcus pyogenes",
  "Treponema pallidum",
  "Streptococcus pneumoniae",
  "Klebsiella pneumoniae"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 47,
  "question": " Los fármacos agonistas se diferencian de los antagonistas por:",
  "answer": "Presentar actividad intrínseca superior a 0",
  "options": [
  "Carecer de afinidad receptorial",
  "Presentar menor selectividad receptorial",
  "Presentar actividad intrínseca superior a 0",
  "Presentar mayor potencia"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 48,
  "question": " ¿Cuál de los siguientes parámetros farmacocinéticos permite cuantificar la magnitud y velocidad de absorción de un fármaco?",
  "answer": "Biodisponibilidad",
  "options": [
  "Velocidad de vaciamiento gástrico",
  "Vida media de absorción",
  "Biodisponibilidad",
  "Clearence"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 49,
  "question": " ¿Cuál de los siguientes antiepilépticos presenta cinética de eliminación saturable?",
  "answer": "Difenilhidantoína",
  "options": [
  "Levetiracetam",
  "Fenobarbital",
  "Difenilhidantoína",
  "Ácido valproico"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 50,
  "question": " ¿Cuál de los siguientes AINES inhibe en forma irreversible las ciclooxigenasa?",
  "answer": "Ácido acetilsalicílico",
  "options": [
  "Ibuprofeno",
  "Ketoprofeno",
  "Ácido salicílico",
  "Ácido acetilsalicílico"
    ],
    "discipline": "Farmaco",
  },
  {
  "numb": 51,
  "question": " ¿Cuál es la unidad utilizada para medir la Transferencia Lineal de Energía (LET)?",
  "answer": "Sievert",
  "options": [
  "Gray",
  "KEv",
  "Sievert",
    ],
    "discipline": "Biofisica",
  },
  {
  "numb": 52,
  "question": " La radiosensibilidad celular a las radiaciones ionizantes :",
  "answer": "Aumenta durante la fase M del ciclo celular.",
  "options": [
  "Es mayor durante la fase G0 del ciclo celular.",
  "Es menor durante la fase S del ciclo celular.",
  "Aumenta durante la fase M del ciclo celular.",
    ],
    "discipline": "Biofisica",
  },
  {
  "numb": 53,
  "question": " La imagen producida por Rx utilizados en medicina diagnostica se basa fundamentalmente en el efecto:",
  "answer": "Fotoelectrico",
  "options": [
  "Compton",
  "Fotoelectrico",
  "De formación de pares",
    ],
    "discipline": "Biofisica",
  },
  {
  "numb": 54,
  "question": " Un trabajador ocupacionalmente expuesto (TOE) frente a una duda de seguridad radiológica decide retroceder duplicando la distancia a la fuente. La dosis recibida será:",
  "answer": "La cuarta parte",
  "options": [
  "La mitad",
  "La cuarta parte",
  "La octava parte"
  ],
    "discipline": "Biofisica",
  },
  {
  "numb": 55,
  "question": " El valor de la capa hemirreductora es el espesor de un material capaz de absorber un porcentaje de la radiación incidente. Marque el porcentaje correcto",
  "answer": "50%",
  "options": [
  "10%",
  "25%",
  "12,5%",
  "50%"
    ],
    "discipline": "Biofisica",
  },
  {
  "numb": 56,
  "question": " ¿Cuál de los siguientes es un mecanismo de lesión celular reversible?",
  "answer": "Edema",
  "options": [
  "Edema",
  "Apoptosis",
  "Displasia",
    ],
    "discipline": "AnatoP",
  },
  {
  "numb": 57,
  "question": " A un paciente con diagnóstico de reflujo gastroesofágico, se le realizan biopsias de control. <br>¿Cuálde las siguientes características se buscará en éstas biopsias?",
  "answer": "Metaplasia intestinal de tipo completa",
  "options": [
  "Epitelio cilíndrico ciliado",
  "Epitelio de tipo transicional",
  "Metaplasia intestinal de tipo completa",
    ],
    "discipline": "AnatoP",
  },
  {
  "numb": 58,
  "question": " Con respecto a la inflamación crónica:",
  "answer": "Es una respuesta que puede durar meses",
  "options": [
  "Es una respuesta de duración limitada y resolución en días",
  "Es una respuesta que puede durar meses",
  "No se ven intentos de curación",
  "No se observan granulomas"
    ],
    "discipline": "AnatoP",
  },
  {
  "numb": 59,
  "question": " Durante la reparación de una lesión cortante se observa :",
  "answer": "Angiogénesis que tiene su pico en el día 5",
  "options": [
  "Reparación por segunda intención",
  "Participación de neutrófilos aproximadamente en el día 8 del proceso",
  "Liberación de VEGF que induce la constricción",
  "Angiogénesis que tiene su pico en el día 5"
    ],
    "discipline": "AnatoP",
  },
  {
  "numb": 60,
  "question": " ¿Cuál de los siguientes es un mecanismo de adaptación celular al estrés?",
  "answer": "Atrofia",
  "options": [
  "Atrofia",
  "Necrosis coagulativa",
  "Necrosis gangreno",
  ],
  "discipline": "AnatoP",
  }
];

