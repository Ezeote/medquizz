// creating an array and passing the number, ques]tions, options, and answers
let questions = [
    {
    "numb": 1,
    "question": "¿Cuál es el principal reservorio de Leishmania infantum en Uruguay?",
    "answer": ["Perros"],
    "options":[
    "Perros",
    "Vacas",
    "Humanos",
    "Roedores"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 2,
    "question": "¿Dónde se encuentra distribuido el vector transmisor de la leishmaniasis visceral en nuestro país?",
    "answer": ["En ciudades de Salto, Artigas y Rivera"],
    "options":[
    "En ciudades de Salto, Artigas y Rivera",
    "En ciudades de Rio Negro, Soriano y Tacuarembó",
    "En zonas rurales de Maldonado, Rocha y Soriano",
    "En zonas rurales de Durazno, Paysandú y Cerro Largo"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 3,
    "question": "¿Cuál de las siguientes parasitosis puede ser transmitida por vectores biológicos?",
    "answer": ["Enfermedad de Chagas"],
    "options":[
    "Hidatidosis",
    "Toxoplasmosis",
    "Criptosporidiosis",
    "Enfermedad de Chagas"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 4,
    "question": "¿Cuál de los siguientes mecanismos es el más frecuente para la adquisición de esporotricosis en nuestro país?",
    "answer": ["Implantación de conidios"],
    "options":[
    "Inhalación de conidios",
    "Ingestión de levaduras",
    "Implantación de conidios",
    "Implantación de levaduras"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 5,
    "question": "¿En qué trimestre del embarazo es más probable que ocurriendo la primo infección materna se produzca la transmisión vertical de la toxoplasmosis?",
    "answer": ["en el tercer trimestre"],
    "options":[
    "en el primer trimestre",
    "en el segundo trimestre",
    "en el tercer trimestre"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 6,
    "question": "¿En qué trimestre del embarazo es más probable que la transmisión vertical de la toxoplasmosis tenga las consecuencias más graves para la salud del producto de gestación?",
    "answer": ["en el primer trimestre"],
    "options":[
    "en el primer trimestre",
    "en el segundo trimestre",
    "en el tercer trimestre"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 7,
    "question": "¿Cuál de las siguientes parasitosis se diagnóstica mediante la utilización del método de Graham o de espátula adhesiva?",
    "answer": ["Oxiurosis"],
    "options":[
    "Giardiasis",
    "Oxiurosis",
    "Ascaridiasis",
    "Tricocefalosis"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 8,
    "question": "¿Cómo ocurre la transmisión de Enterobius vermicularis?",
    "answer": ["Por el ciclo ano-mano-boca, a través de la ingesta de huevos larvados"],
    "options":[
    "Por el ciclo ano-mano-boca, a través de la ingesta de huevos larvados",
    "Por fecalismo, mediante la ingesta de huevos no embrionados emitidos en las heces",
    "Por carnivorismo, mediante la ingesta de carne vacuna contaminada con huevos embrionados",
    "Por la piel, a través de las larvas liberadas de los huevos que se encuentran en zona perianal"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 9,
    "question": "¿Cuál de las siguientes infecciones puede originar un síndrome de malabsorción intestinal que obliga a plantear diagnóstico diferencial con enfermedad celíaca?",
    "answer": ["Giardiasis"],
    "options":[
    "Giardiasis",
    "Balantidiasis",
    "Criptosporidiosis",
    "Cystoisosporiasis"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 10,
    "question": " ¿Cuál de los siguientes nematodos es más probable que produzca una infección a nivel ocular?",
    "answer": ["Toxocara canis"],
    "options":[
    "Toxocara canis",
    "Ascaris lumbricoides",
    "Enterobius vermicularis",
    "Strongyloides stercoralis"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 11,
    "question": "¿Cuál es el principal factor de riesgo para padecer queratitis por Acanthamoeba?",
    "answer": ["uso de lentes de contacto"],
    "options":[
    "hábito de pica",
    "uso de lentes de contacto",
    "traumatismo ocular con hojas, ramas o granos",
    "ingestión de carne de cerdo o cordero cruda o mal cocida"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 12,
    "question": " ¿Cuál de los siguientes artrópodos se pueden hallar infectando las pestañas, causando prurito y enrojecimiento de la zona afectada?",
    "answer": ["Phthirus pubis"],
    "options":[
    "Phthirus pubis",
    "Cimex lectularius",
    "Sarcoptes scabiei",
    "Pediculus humanus var corporis"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 13,
    "question": " Mujer de 27 años, consulta por lesión pruriginosa en pie izquierdo. Comenzó hace una semana, con una lesión eritematosa, serpiginosa, muy pruriginosa, que avanza entre milímetros y pocos centímetros en un solo sentido. Resto del examen normal. ¿Cuál sería el diagnóstico más probable?",
    "answer": ["Larva migrans cutánea"],
    "options":[
    "Escabiosis",
    "Toxocariasis",
    "Estrongiloidiasis",
    "Larva migrans cutánea"
    ],
    "discipline": "Parasito",
    "comment":"",
    },
    {
    "numb": 14,
    "question": "¿Cuál es el mecanismo de resistencia a la penicilina en S. aureus meticilino sensible?",
    "answer": ["betalactamasas"],
    "options":[
    "betalactamasas",
    "PBP en mosaico",
    "bombas de eflujo",
    "adquisición de PBP2a"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 15,
    "question": " En el antibiograma por disco difusión realizado a una cepa de S. aureus en el que se colocaron discos de eritromicina y clindamicina a 2 centímetros de distancia, se observa la ausencia de halo de inhibición para ambos antibióticos ¿Como interpreta este resultado?",
    "answer": ["presenta resistencia constitutiva a eritromicina y clindamicina"],
    "options":[
    "presenta resistencia a eritromicina inducible por clindamicina",
    "presenta resistencia a clindamicina inducible por eritromicina",
    "presenta resistencia constitutiva a eritromicina y clindamicina",
    "presenta resistencia constitutiva a clindamicina e inducible a eritromicina",
    "presenta resistencia constitutiva a eritromicina e inducible a clindamicina"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 16,
    "question": " Un paciente de 70 años consulta por lesiones vesiculares agrupadas en la mitad derecha del torso distribuidas a lo largo de un dermatoma sensitivo. Refiere dolor urente y picazón desde hace 3 días. ¿Cuál es el diagnóstico más probable?",
    "answer": ["reactivación de infección latente por el virus de varicela"],
    "options":[
    "infección aguda por Staphylococcus aureus",
    "primoinfección por virus de herpes simple tipo I",
    "reactivación de infección latente por citomegalovirus",
    "reactivación de infección latente por el virus de varicela",
    "complicación post infecciosa secundaria a infección por Streptococcus pyogenes"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 17,
    "question": " Las infecciones por Escherichia coli enterohemorrágica (EHEC) en niños pueden desencadenar el sindrome urémico hemolítico. ¿Cuál de los factores de virulencia de EHEC se asocia a esta complicación?",
    "answer": ["toxinas tipo Shiga"],
    "options":[
    "intimina",
    "pili BFP",
    "toxinas tipo Shiga",
    "sistema de secreción de tipo 3",
    "toxinas termo estable y termolábil"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 18,
    "question": "¿Cuál de los siguientes agentes es la causa más frecuente de diarrea aguda acuosa?",
    "answer": ["Rotavirus"],
    "options":[
    "Rotavirus",
    "Adenovirus",
    "Shigella sp",
    "Salmonella sp",
    "E. coli enteropatogénica"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 19,
    "question": " ¿Cuál de las siguientes formas de adquisición de una infección urinaria alta es la más frecuente?",
    "answer": ["colonización de la uretra con uropatógenos de la microbiota intestinal y ascenso por vía canalicular"],
    "options":[
    "ascenso por vía uretral de patógenos transmitidos sexualmente",
    "translocación de uropatógenos que colonizan el tracto digestivo hacia el tracto urinario",
    "bacteriemia a punto de partida de un foco a distancia con un uropatógeno y colonización renal",
    "colonización de la uretra con uropatógenos de la microbiota intestinal y ascenso por vía canalicular"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 20,
    "question": " ¿Cuál es la principal limitación de la prueba de tuberculina (PPD) en el diagnóstico de la tuberculosis?",
    "answer": ["Puede producir resultados falsos negativos en inmunocomprometidos"],
    "options":[
    "No detecta la tuberculosis activa, solo la latente",
    "Se trata de una técnica de alto costo, baja disponibilidad y difícil lectura",
    "Puede producir resultados falsos negativos en inmunocomprometidos",
    "En pacientes vacunados solo resulta de utilidad en presencia de síntomas respiratorios"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 21,
    "question": " ¿Cuál es la causa más frecuente de bronquiolitis?",
    "answer": ["Virus respiratorio sincitial"],
    "options":[
    "Bordetella pertussis",
    "Streptococcus pneumoniae",
    "Virus respiratorio sincitial",
    "Virus Influenza de tipo A"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 22,
    "question": "¿Cuál de los siguientes antivirales puede indicarse para el tratamiento de infecciones respiratorias agudas graves causadas por virus influenza?",
    "answer": ["Oseltamivir"],
    "options":[
    "Aciclovir",
    "Ganciclovir",
    "Zidovudina",
    "Oseltamivir"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 23,
    "question": "Enterovirus son una causa muy frecuente de infecciones del sistema nervioso central. ¿Cuál es la principal vía de transmisión de estos agentes?",
    "answer": ["fecal oral"],
    "options":[
    "sexual",
    "connatal",
    "fecal oral",
    "sanguínea",
    "respiratoria"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 24,
    "question": "¿Qué mecanismo de virulencia de Neisseria meningitidis es responsable de la inducción de respuesta inflamatoria exacerbada asociada al púrpura fulminante?",
    "answer": ["Liberación de endotoxina del lipo-oligosacárido"],
    "options":[
    "Producción de cápsula",
    "Variación de fase de proteínas de superficie",
    "Liberación de endotoxina del lipo-oligosacárido",
    "Producción de proteínas de unión al factor H del complemento"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 25,
    "question": "¿Qué es el ADN proviral que se produce durante el ciclo de replicación de VIH?",
    "answer": ["ADN copia del genoma viral integrado al ADN de la célula hospedera"],
    "options":[
    "ADN copia del genoma viral integrado al ADN de la célula hospedera",
    "Múltiples copias del ADN viral que se incorporarán a las nuevas partículas virales",
    "ADN copia del genoma viral liberado al citoplasma y utilizado como molde para la transcripción",
    "ADN producto de la retrotranscripción que será encapsidado y utilizado como molde de ARN mensajero viral"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 26,
    "question": "¿Qué método de observación microscópica es útil en el diagnóstico de sífilis en un paciente que presenta un chancro genital?",
    "answer": ["frotis en fresco al microscopio de campo oscuro"],
    "options":[
    "frotis en fresco al microscopio de campo claro",
    "frotis en fresco al microscopio de campo oscuro",
    "frotis fijado y teñido con Gram al microscopio de campo claro",
    "frotis fijado y teñido con Gram al microscopio de campo oscuro"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 27,
    "question": "En control de embarazo de una mujer de 21 años recibimos los siguientes resultados para Virus de la Hepatitis B: <br>Antígeno de superficie de VHB (HBsAg) negativo <br>Anticuerpos anti antígeno de superficie del VHB positivo <br>Anticuerpos anti core del VHB positivo <br>¿Cuál de las siguientes opciones es adecuada en la interpretación de estos resultados?",
    "answer": ["La paciente cursó en el pasado una infección por VHB"],
    "options":[
    "La paciente está vacunada contra el VHB",
    "La paciente está cursando una infección por VHB",
    "La paciente cursó en el pasado una infección por VHB"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 28,
    "question": "Escolar de 10 años presenta un cuadro de faringoamigdalitis. Se realiza exudado faríngeo, que se siembra en agar sangre. Luego de 20 horas de incubación, se observan colonias redondas muy pequeñas con una amplia zona de hemólisis completa. Frente a este resultado, ¿cuál es el agente más probable de esta faringitis?",
    "answer": ["Streptococcus pyogenes"],
    "options":[
    "Streptococcus pyogenes",
    "Streptococcus agalactiae",
    "Streptococcus pneumoniae",
    "Staphylococcus aureus",
    "Staphylococcus epidermidis"
    ],
    "discipline": "Bacterio",
    "comment":"",
    },
    {
    "numb": 29,
    "question": " En una paciente de 70 años, tabaquista intensa, con diagnóstico de enfermedad pulmonar obstructiva crónica (EPOC) y enfisema pulmonar. ¿Qué alteraciones espera encontrar en los estudios funcionales?",
    "answer": ["Aumento del volumen residual (VR)"],
    "options":[
    "Limitación al flujo inspiratorio",
    "Aumento del volumen residual (VR)",
    "VEF1 por encima de los valores normales esperados",
    "Aumento de las resistencias de vía aérea con respuesta significativa a broncodilatadores"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 30,
    "question": " ¿En qué se diferencia la medida de la complacencia pulmonar en condiciones estáticas de los métodos dinámicos?",
    "answer": ["No está influenciada por el flujo de vía aérea"],
    "options":[
    "No requiere oclusión de la vía aérea",
    "No está influenciada por el flujo de vía aérea",
    "No está influenciada por el volumen pulmonar",
    "No está influenciada por el cambio de presión alveolar"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 31,
    "question": " En un paciente con un shock cardiogénico, ¿que patrón hemodinámico espera encontrar?",
    "answer": ["Resistencias vasculares sistémicas elevadas, presión capilar pulmonar elevada, índice cardíaco descendido"],
    "options":[
    "Resistencias vasculares sistémicas elevadas, presión capilar pulmonar descendida, índice cardíaco descendido",
    "Resistencias vasculares sistémicas elevadas, presión capilar pulmonar elevada, índice cardíaco descendido",
    "Resistencias vasculares sistémicas descendidas, presión capilar pulmonar elevada, índice cardíaco descendido",
    "Resistencias vasculares sistémicas elevadas, presión capilar pulmonar descendida, índice cardíaco aumentado"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 32,
    "question": " En un paciente con un shock por anemia aguda a causa de un sangrado. ¿Qué cambios en metabolismo del oxígeno espera encontrar?.",
    "answer": ["Contenido venoso de oxígeno (CvO2) descendido"],
    "options":[
    "Extracción periférica de oxígeno (EO2) descendida",
    "Consumo sistémico de oxígeno (VO2) aumentado",
    "Contenido venoso de oxígeno (CvO2) descendido",
    "Disponibilidad sistémica de oxígeno (DO2) aumentada"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 33,
    "question": " ¿Cuál es el principal efecto de la hiponatremia a nivel cerebral?",
    "answer": ["Edema cerebral por el ingreso de agua al interior de las células"],
    "options":[
    "Aumento de la presión arterial debido a la retención de sodio",
    "Edema cerebral por el ingreso de agua al interior de las células",
    "Disminución de la permeabilidad de la barrera hematoencefálica"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 34,
    "question": " Hombre de 40 años consulta por debilidad y calambres luego de diarrea acuosa abundante durante los últimos tres días. <br>Del examen físico está deshidratado y la analítica muestra Potasio sérico: 2.8 mEq/L, pH arterial: 7.30, HCO3 arterial 17 mEq/L. <br>¿Cuál es la principal causa de la alteración del potasio en este paciente?",
    "answer": ["Alteración del balance externo"],
    "options":[
    "Alteración del balance interno",
    "Alteración del balance externo",
    "Alteración combinada del balance interno y externo"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 35,
    "question": " Un hombre de 65 años con enfermedad renal crónica avanzada consulta por fatiga y dificultad para respirar. La gasometría arterial muestra  <br>pH: 7.32  <br>PaCO₂: 32 mmHg  <br>HCO₃⁻: 16 mEq/L <br>¿Cuál es la interpretación de esta gasometría?",
    "answer": ["Acidosis metabólica con respuesta adaptativa adecuada"],
    "options":[
    "Acidosis metabólica con respuesta adaptativa adecuada",
    "Acidosis metabólica con respuesta adaptativa insuficiente",
    "Acidosis respiratoria con respuesta adaptativa adecuada",
    "Acidosis respiratoria con respuesta adaptativa insuficiente"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 36,
    "question": " Indique cuál de los siguientes factores puede reducir la presión intracraneana por disminución del volumen sanguíneo cerebral:",
    "answer": ["Aumento de la ventilación alveolar"],
    "options":[
    "Aumento de la presión venosa central",
    "Aumento de la ventilación alveolar",
    "Acidosis respiratoria",
    "Hipernatremia"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 37,
    "question": "Paciente de 19 años consumidor de cocaína ingresa por shock hipovolémico en anemia aguda por politraumatismo. Requiere 10 volúmenes de glóbulos rojos en las primeras 24 horas. A las 48 horas se mantiene hemodinamicamente estable sin requerimientos de transfusiones . <br> De la valoración de la función renal se destaca: <br> <img src='https://raw.githubusercontent.com/Ezeote/medquizz/refs/heads/main/BCP/2025-02-06/media/p37.PNG'> <br> ¿Cuál es el diagnóstico de la función renal màs probable? ",
    "answer": ["Injuria renal aguda parenquimatosa isquémica"],
    "options":[
    "Injuria renal aguda pre-renal",
    "Injuria renal aguda post-renal",
    "Injuria renal aguda parenquimatosa tóxica",
    "Injuria renal aguda parenquimatosa isquémica"
    ],
   
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 38,
    "question": "¿Cuál de los siguientes factores produce hiperfiltración glomerular y progresión de la enfermedad renal?",
    "answer": ["Dieta rica en proteínas"],
    "options":[
    "Hipotensión arterial",
    "Hipovitaminosis D",
    "Dieta rica en proteínas",
    "Uso de inhibidores de la enzima conversora de angiotensina II"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 39,
    "question": "¿Cuál de los siguientes es un reactante de fase aguda negativo?",
    "answer": ["Albúmina"],
    "options":[
    "Albúmina",
    "Glóbulos blancos",
    "Proteína C reactiva",
    "Velocidad de eritrosedimentación"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 40,
    "question": " En la Insuficiencia hepatocítica ¿Qué ocurre con las resistencias vasculares sistémicas?",
    "answer": ["Disminuyen"],
    "options":[
    "Disminuyen",
    "Son constantes",
    "Aumentan"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 41,
    "question": "¿Cuál es la principal respuesta adaptativa del organismo frente a una acidosis respiratoria?",
    "answer": ["Aumento de la concentración de bicarbonato plasmático"],
    "options":[
    "Aumento de la concentración de bicarbonato plasmático",
    "Disminución de la concentración de bicarbonato plasmático",
    "Reducción de la producción de glóbulos rojos",
    "Aumento de la frecuencia respiratoria"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 42,
    "question": "En la insuficiencia cardíaca aguda ¿Cuál de los siguientes factores contribuye a la activación del sistema renina angiotensina aldosterona?",
    "answer": ["Disminución de la perfusión renal"],
    "options":[
    "Aumento del gasto cardíaco",
    "Disminución de la perfusión renal",
    "Aumento de la presión arterial sistémica",
    "Reducción del volumen intravascular"
    ],
    "discipline": "Fisiopato",
    "comment":"",
    },
    {
    "numb": 43,
    "question": " Un fármaco ‘’X’’ es un agonista parcial de los receptores adrenérgicos α1. ¿Para cuál de los siguientes fármacos X podría actuar como antagonista competitivo?",
    "answer": ["un agonista total de los receptores α1."],
    "options":[
    "un agonista total de los receptores α1.",
    "un agonista inverso de los receptores α1.",
    "un antagonista neutro de los receptores α1.",
    "un modulador alostérico positivo de los receptores α1."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 44,
    "question": " ¿Qué mecanismo de adaptación corresponde al descenso del número de receptores, dado por la exposición prolongada a un agonista?",
    "answer": ["Regulación a la baja."],
    "options":[
    "Regulación a la baja.",
    "Efecto sinérgico negativo.",
    "Desensibilización del receptor."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 45,
    "question": " ¿Cuál de las siguientes es una característica farmacocinética de morfina?",
    "answer": ["Morfina 6- glucurónido es el principal metabolito activo.", "La principal vía de excreción es renal."],
    "options":[
    "La principal vía de excreción es renal.",
    "Se metaboliza principalmente por CYP3A4.",
    "El fenómeno de primer paso intestinal es despreciable.",
    "Morfina 6- glucurónido es el principal metabolito activo."
    ],
    "discipline": "Farmaco",
    "comment":"Esta pregunta es ambigua. Correctas D y A",
    },
    {
    "numb": 46,
    "question": " ¿Cuál de las siguientes afirmaciones sobre las características farmacocinéticas de ciprofloxacina es correcta?",
    "answer": ["Alcanza concentraciones terapéuticas en próstata."],
    "options":[
    "Su biodisponibilidad es inferior al 50%.",
    "Su excreción es predominantemente hepática.",
    "Alcanza concentraciones terapéuticas en próstata.",
    "Los alimentos reducen significativamente su absorción."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 47,
    "question": " Respecto a las características farmacocinéticas de la nitrofurantoína en su forma microcristales, ¿cuál de las siguientes afirmaciones es correcta?",
    "answer": ["Las concentraciones en orina del fármaco dependen del aclaramiento de creatinina."],
    "options":[
    "Su metabolismo se lleva a cabo principalmente en el riñón.",
    "La reabsorción del fármaco es favorecida cuando la orina es alcalina.",
    "La absorción oral es limitada, con una biodisponibilidad aproximada del 30%.",
    "Las concentraciones en orina del fármaco dependen del aclaramiento de creatinina."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 48,
    "question": "¿Cuál de los siguientes fármacos disminuye su concentración plasmática en presencia de carbamazepina?",
    "answer": ["Drospirenona."],
    "options":[
    "Atenolol.",
    "Metformina.",
    "Gentamicina.",
    "Drospirenona."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 49,
    "question": "¿Cuál de los siguientes fármacos anticonvulsivantes modula la exocitosis de neurotransmisores al unirse a la proteína vesicular SV2A?",
    "answer": ["Levetiracetam."],
    "options":[
    "Valproato.",
    "Lamotrigina.",
    "Pregabalina.",
    "Levetiracetam."
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 50,
    "question": " ¿Cuál de los efectos farmacológicos no contraceptivos están vinculados al uso de anticonceptivos hormonales orales?",
    "answer": ["regularización de los ciclos menstruales"],
    "options":[
    "mejora el control glicémico",
    "disminuye los niveles de inmunidad",
    "regularización de los ciclos menstruales",
    "disminución de eventos cardiovasculares"
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 51,
    "question": " ¿Cuál de las siguientes constituye un ejemplo de una vía parenteral?",
    "answer": ["Subcutánea"],
    "options":[
    "Rectal",
    "Intranasal",
    "Sublingual",
    "Subcutánea"
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 52,
    "question": " ¿Cuál de las siguientes benzodiazepinas son metabolizadas sin utilizar reacciones de oxido-reducción?",
    "answer": ["Oxazepam y lorazepam"],
    "options":[
    "Lorazepam y clonazepam",
    "Oxazepam y lorazepam",
    "Alprazolam y lorazepam",
    "Diazepam y midazolam"
    ],
    "discipline": "Farmaco",
    "comment":"",
    },
    {
    "numb": 53,
    "question": "¿Cuál de las siguientes radiaciones presenta una mayor transferencia lineal de energía?",
    "answer": ["Rayos alfa"],
    "options":[
    "Rayos X",
    "Rayos alfa",
    "Rayos gamma",
    "Neutrones",
    "Electrones"
    ],
    "discipline": "Biofisica",
    "comment":"",
    },
    {
    "numb": 54,
    "question": "¿Cuál de las siguientes formas de interacción de la radiación ionizante electromagnética con la materia involucra la interacción con el campo eléctrico del núcleo?",
    "answer": ["Formación de pares"],
    "options":[
    "Efecto Compton",
    "Colisión inelástica",
    "Efecto fotoeléctrico",
    "Formación de pares"
    ],
    "discipline": "Biofisica",
    "comment":"",
    },
    {
    "numb": 55,
    "question": "En una curva de sobrevida ¿cómo se define las dosis cuasiumbral?",
    "answer": ["Dosis a partir de la cual la caída de sobrevida es exponencial"],
    "options":[
    "Dosis que disminuye la sobrevida al 37%",
    "Dosis que disminuye la sobrevida al 50 %",
    "Dosis a partir de la cual la caída de sobrevida es exponencial"
    ],
    "discipline": "Biofisica",
    "comment":"",
    },
    {
    "numb": 56,
    "question": "¿En qué se basa la utilización de blindajes para la protección radiológica frente a la radiación electromagnética?",
    "answer": ["En que la intensidad de fotones disminuye de forma exponencial al interponer un blindaje."],
    "options":[
    "En que la intensidad de fotones disminuye de forma lineal al interponer un blindaje.",
    "En que la intensidad de fotones se mantiene constante al interponer un blindaje de alto Z",
    "En que la intensidad de fotones disminuye de forma exponencial al interponer un blindaje."
    ],
    "discipline": "Biofisica",
    "comment":"",
    },
    {
    "numb": 57,
    "question": "¿En cuál de los siguientes procesos inflamatorios las células principalmente involucradas al inicio del proceso son los neutrófilos?",
    "answer": ["Inflamación aguda"],
    "options":[
    "Inflamación aguda",
    "Inflamación crónica agudizada",
    "Inflamación crónica granulomatosa",
    "Inflamación crónica no granulomatosa"
    ],
    "discipline": "AnatoP",
    "comment":"",
    },
    {
    "numb": 58,
    "question": "¿Cuál de los siguientes procesos de adaptación celular ocurren en la zona de transformación del cuello uterino cuando se observa la sustitución del epitelio cilíndrico normal por epitelio escamoso inmaduro?",
    "answer": ["Metaplasia"],
    "options":[
    "Atrofia",
    "Displasia",
    "Metaplasia",
    "Hiperplasia",
    " Hipertrofia"
    ],
    "discipline": "AnatoP",
    "comment":"",
    },
    {
    "numb": 59,
    "question": "¿Cuál de las siguientes opciones indica una característica de la necrosis coagulativa?",
    "answer": ["Tiene aspecto firme y las células muestran contornos preservados con pérdida del núcleo y es característica del infarto de miocardio."],
    "options":[
    "Tiene aspecto blanquecino y friable y es característica de los focos de infección tuberculosa, formando granulomas.",
    "Tiene aspecto de color blanco tiza, con adipocitos necróticos que en su interior presentan depósitos de calcio basófilo.",
    "Tiene aspecto de masa viscosa con material necrótico que suele ser amarillento cremoso por la presencia de leucocitos muertos.",
    "Tiene aspecto firme y las células muestran contornos preservados con pérdida del núcleo y es característica del infarto de miocardio."
    ],
    "discipline": "AnatoP",
    "comment":"",
    },
    {
    "numb": 60,
    "question": "La prueba de Papanicolau, ampliamente utilizada en nuestro medio como método de screening para cáncer de cuello uterino, se trata de:",
    "answer": ["Una citología, donde se evalúan células del endocérvix y exocérvix."],
    "options":[
    "Una citología, donde se evalúan células del endocérvix y exocérvix.",
    "Una punción aspirativa con aguja fina (PAAF) de lesiones ulceradas de endocérvix.",
    "Una biopsia quirúrgica donde se toman fragmentos de tejido del endocérvix y exocérvix.",
    "Una prueba de biología molecular donde se evalúa la infección activa por HPV en las células del endocérvix."
    ],
    "discipline": "AnatoP",
    "comment":"",
    }
];


/////////////////////////////////////
