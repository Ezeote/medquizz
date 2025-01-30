// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "Un modo de detectar la replicación viral en cultivos es mediante la observación de efecto citopático - ecp. ¿en cuál de las siguientes técnicas empleadas para el cultivo es posible constatar la aparición de ecp? ",
    "answer": "monocapas celulares",
    "options": [
      "monocapas celulares",
      "huevos embrionados",
      "placas de agar sangre",
      "animales de laboratorio"
    ]
  },
  {
    "numb": 2,
    "question": "Las infecciones por papilomavirus humano (hpv), se asocian al desarrollo de cáncer de cuello uterino. ¿a cuál de las siguientes características se relaciona este potencial oncogénico?",
    "answer": "su replicación en células epiteliales altera la regulación del ciclo celular",
    "options": [
      "su replicación en células epiteliales altera la regulación del ciclo celular",
      "su replicación en el epitelio induce la alteración del funcionamiento mitocondrial",
      "la forma episomal del genoma viral en la etapa de latencia induce el engrosamiento del endometrio",
      "la forma episomal del genoma viral en la etapa de latencia altera el ciclo celular de las células glandulares"
    ]
  },
  {
    "numb": 3,
    "question": ". ¿de cuáles de los siguientes estudios disponemos en nuestro país para el diagnóstico de tuberculosis pulmonar? ",
    "answer": "tinción de ziehl neelsen, pcr y cultivo en medios selectivos como löwenstein jensen",
    "options": [
      "tinción de gram, pcr y cultivo en monocapas de líneas celulares permisivas",
      "tinción de gram, pcr y cultivo en medios líquidos como caldo tsb y tioglicolato",
      "tinción de ziehl neelsen, pcr y cultivo en medios selectivos como löwenstein jensen",
      "tinción con azul de metileno, pcr, y cultivo en medios ricos y muy ricos como agar sangre y agar chocolate"
    ]
  },
  {
    "numb": 4,
    "question": "El informe semicuantitativo de la baciloscopía de expectoración sirve para: ",
    "answer": "evaluar el grado de contagiosidad y respuesta al tratamiento",
    "options": [
      "estimar la duración de tratamiento",
      "evaluar el grado de contagiosidad y respuesta al tratamiento",
      "definir si las bacterias presentes en el esputo están vivas o muertas",
      "determinar si se trata de un caso de tuberculosis primaria o de reactivación"
    ]
  },
  {
    "numb": 5,
    "question": "Frente a un cuadro de meningoencefalitis aguda supurada con púrpura en un paciente de 12 años, ¿en cuál de las siguientes situaciones de laboratorio sospecharía que el agente causal es neisseria meningitidis? ",
    "answer": "en el directo del lcr se observan cocos gram negativos y desarrollo bacteriano en agar sangre y agar chocolate",
    "options": [
      "en el directo del lcr se observan cocos gram negativos y desarrollo bacteriano en agar sangre y agar chocolate",
      "en el directo del lcr se observan cocos gram positivos y desarrollo bacteriano en agar sangre y agar chocolate",
      "en el directo del lcr se observan bacilos gram negativos y desarrollo en agar chocolate (pero no en sangr",
      "en el directo del lcr se observan bacilos gram positivos y desarrollo en agar sangre y agar chocolate"
    ]
  },
  {
    "numb": 6,
    "question": "Adolescente, sin antecedentes consulta en emergencia por cefalea, fiebre y vómitos. En el liceo al que asiste, se registraron varios casos de enterovirosis. Sospechando una meningoencefalitis por enteroviurs, ¿cuáles de las siguientes características del lcr espera encontrar? ",
    "answer": "claro, glucosa normal, proteínas aumentadas y escasas células inflamatorias",
    "options": [
      "claro, hemorrágico con glucosa muy disminuida y proteínas disminuidas",
      "claro, glucosa normal, proteínas aumentadas y escasas células inflamatorias",
      "turbio, glucosa indosificable, proteínas normales y abundantes células inflamatorias",
      "turbio, glucosa disminuida, proteínas aumentadas y abundantes células inflamatorias"
    ]
  },
  {
    "numb": 7,
    "question": "Se reaisla una cepa de staphylococcus aureus de una muestra de infección de piel en agar sangre, agar tsa (tripticasa soya agar) y mc conkey lactosa. ¿en cuál de estos medios esperaría encontrar desarrollo a las 24 horas de incubación? ",
    "answer": "en tsa y agar sangre, pero no en mcconkey",
    "options": [
      "en los tres medios",
      "en tsa y agar sangre, pero no en mcconkey",
      "en agar sangre y mcconkey, pero no en tsa",
      "en agar sangre pero no en mc conkey ni en tsa"
    ]
  },
  {
    "numb": 8,
    "question": "En una mujer joven con síntomas urinarios bajos, las pruebas de esterasas leucocitarias y nitritos en orina dan resultado negativo. Frente a esto, ¿qué espera encontrar en el urocultivo?",
    "answer": "ningún desarrollo bacteriano",
    "options": [
      "un cultivo polimicrobiano",
      "ningún desarrollo bacteriano",
      "recuento significativo de una especie de staphylococcus",
      "recuento significativo de una especie de enterobacterales"
    ]
  },
  {
    "numb": 9,
    "question": "¿cuál de los siguientes antibióticos podría utilizarse para el tratamiento de una infección urinaria baja por escherichia coli productora de betalactamasa de espectro extendido (ble,? ",
    "answer": "cefuroxime",
    "options": [
      "ceftriaxona",
      "cefuroxime",
      "amoxicilina-clavulánico"
    ]
  },
  {
    "numb": 10,
    "question": "La formación de comunidades bacterianas intracelulares por parte de escherichia coli uropatógeno explica en parte que cuando estas bacterias causan infección puedan: ",
    "answer": "persistir en el tracto urinario y ser causa de recurrencia de la infección",
    "options": [
      "adherirse mediante pili tipo p y ascender por la vía urinaria",
      "persistir en el tracto urinario y ser causa de recurrencia de la infección",
      "presentar menores concentraciones inhibitorias mínimas para distintos antibióticos"
    ]
  },
  {
    "numb": 11,
    "question": "¿a cuál de las siguientes características del virus influenza se relaciona el hecho de que anualmente sea necesario cambiar la composición de cepas en la vacuna antigripal?",
    "answer": "variación antigénica en la hemaglutinina y/o neuraminidasa",
    "options": [
      "variación de fase en la expresión de la proteína matriz",
      "variación antigénica en las proteínas de la nucleocápside",
      "variación antigénica en la hemaglutinina y/o neuraminidasa",
      "variación de fase en la expresión de las espículas de superficie"
    ]
  },
  {
    "numb": 12,
    "question": ". Las infecciones por vrs causan característicamente lesiones en el epitelio respiratorio, entre las cuales se encuentran la formación de:  ",
    "answer": "fusiones celulares que se observan como grandes células polinucleadas",
    "options": [
      "fusiones celulares que se observan como grandes células polinucleadas",
      "lesiones transformantes que se observan como engrosamiento del epitelio",
      "úlceras que avanzan hacia la submucosa con destrucción de alvéolos pulmonares"
    ]
  },
  {
    "numb": 13,
    "question": "La toxina de panton-valentine puede ser producida por algunas cepas de s. Aureus y está asociada a peor evolución en las infecciones de piel y tejidos blandos, neumonía necrotizante y enfermedad osteoarticular. ¿cuál de los siguientes es su mecanismo de acción conocido? ",
    "answer": "genera poros en la membrana de los leucocitos",
    "options": [
      "genera poros en la membrana de los leucocitos",
      "se une a la porción fc de los anticuerpos y los inactiva",
      "produce una activación policlonal de linfocitos t con liberación masiva de citoquinas"
    ]
  },
  {
    "numb": 14,
    "question": "¿cuál es el mecanismo principal que explica la meticilino resistencia en s. Aureus?",
    "answer": "síntesis de una nueva proteína anómala de unión a penicilina (pbp)",
    "options": [
      "cambio postraduccional con metilación del ribosoma",
      "producción de enzimas que hidrolizan todos lo betalactámicos",
      "síntesis de una nueva proteína anómala de unión a penicilina (pbp)"
    ]
  },
  {
    "numb": 15,
    "question": "En relación al tratamiento de las infecciones causadas por streptococcus pyogenes con antibióticos betalactámicos, debe considerarse que:",
    "answer": "no se ha descrito resistencia a los betalactámicos",
    "options": [
      "no se ha descrito resistencia a los betalactámicos",
      "es frecuente la resistencia penicilina mediada por la producción de penicilinasas",
      "existen cepas resistentes a penicilina y ceōriaxona por la producción de pbp en mosaico",
      "circulan cepas resistentes a todos los betalactámicos por metilación del sitio blanco de acción"
    ]
  },
  {
    "numb": 16,
    "question": "¿cómo es el diagnóstico de la queratitis amebiana?",
    "answer": "de sospecha clínica mediante el examen oōalmológico, de apoyo epidemiológico y de confirmación parasitológica",
    "options": [
      "clínico, epidemiológico y serológico mediante técnicas directas e indirectas de inmunoensayos (elisa)",
      "de sospecha clínica mediante el examen oōalmológico, de apoyo epidemiológico y de confirmación parasitológica",
      "clínico, epidemiológico, imagenológico mediante tomograia computarizada con enfoque de órbitas, serológico y parasitológico",
      "clínico y de confirmación imagenológica mediante la visualización de quistes en el examen oōalmológico con lámpara de hendidura"
    ]
  },
  {
    "numb": 17,
    "question": "¿cuál de las siguientes parasitosis puede ser transmitida de forma vertical? ",
    "answer": "enfermedad de chagas",
    "options": [
      "miasis",
      "hidatidosis",
      "distomatosis hepática",
      "enfermedad de chagas"
    ]
  },
  {
    "numb": 18,
    "question": "Las infecciones por helmintos parásitos pueden generar producción de inmunoglobulinas específicas igg4 e ige. ¿con la polarización de qué respuesta citotóxica se ve acompañado este fenómeno? ",
    "answer": "una respuesta de tipo th2 con producción de il-4, il-5 e il-13 19.",
    "options": [
      "una respuesta de tipo th1 con producción de il-2 e ifn-g",
      "una respuesta de tipo th2 con producción de il-2 e ifn-g",
      "una respuesta de tipo th1 con producción de il-4, il-5 e il-13",
      "una respuesta de tipo th2 con producción de il-4, il-5 e il-13 19."
    ]
  },
{
  "numb": 19,
  "question": "¿cuál de los siguientes agentes infecciosos es transmitido por vectores biológicos? ",
  "answer": "leishmania infantum",
  "options": [
    "giardia lamblia",
    "toxoplasma gondii",
    "leishmania infantum",
    "pneumocystis jirovecii"
  ]
},
  {
    "numb": 20,
    "question": "Ante la sospecha de una neumocistosis en un paciente inmunodeprimido, ¿qué estudio solicitaría para confirmar su presunción diagnóstica en un plazo de 24 horas? ",
    "answer": "inmunofluorescencia directa",
    "options": [
      "radiograia de tórax",
      "tomograia axial pulmonar",
      "inmunofluorescencia directa",
      "hematoxilina-eosina en cortes histopatológicos"
    ]
  },
  {
    "numb": 21,
    "question": "Los mucorales pueden ocasionar infecciones graves en los pacientes con covid-19. ¿cuál de los siguientes grupos de pacientes es el de mayor riesgo para contraer una mucormicosis?",
    "answer": "diabéticos en tratamiento con corticoides",
    "options": [
      "adultos mayores previamente sanos",
      "diabéticos en tratamiento con corticoides",
      "pacientes no vacunados contra covid-19",
      "pacientes asmáticos o con enfermedad pulmonar crónica"
    ]
  },
  {
    "numb": 22,
    "question": "¿cuál de los siguientes artrópodos produce una infección de transmisión sexual?",
    "answer": "pthirus pubis",
    "options": [
      "pthirus pubis",
      "tunga penetrans",
      "cimex lectularius",
      "pediculus humanus"
    ]
  },
  {
    "numb": 23,
    "question": "¿cuál de los siguientes parásitos pueden producir síndrome de löeffler? ",
    "answer": "strongyloides stercoralis",
    "options": [
      "taenia solium",
      "trichuris trichiura",
      "enterobius vermicularis",
      "strongyloides stercoralis"
    ]
  },
  {
    "numb": 24,
    "question": "Frente a una toxoplasmosis congénita sintomática ¿qué manifestaciones clínicas se podrían presentar? ",
    "answer": "coriorretinitis, calcificaciones cerebrales e hidrocefalia",
    "options": [
      "coriorretinitis, calcificaciones cerebrales e hidrocefalia",
      "fiebre, anemia, obliteración de vasos sanguíneos y áreas de necrosis",
      "sordera congénita, hipoplasia dental y malformaciones del paladar óseo"
    ]
  },
  {
    "numb": 25,
    "question": "¿qué efectos posee el veneno de los ofidios del género bothrops? ",
    "answer": "proteolítico, coagulante y hemolítico",
    "options": [
      "proteolítico, coagulante y hemolítico",
      "neurotóxico, miotóxico y coagulante",
      "neurotóxico, coagulante y proteolítico"
    ]
  },
  {
    "numb": 26,
    "question": "¿cuál es el principal mecanismo de infección de la toxocariasis en el humano por toxocara canis? ",
    "answer": "la ingestión de huevos que se tornan infectantes luego de una a dos semanas de ser eliminados en las materias fecales de perros",
    "options": [
      "la ingestión de larvas liberadas en excretas de perras gestantes al ambiente",
      "la ingestión de huevos recién emitidos y liberados en las excretas de los perros al ambiente",
      "el ingreso de larvas por vía transcutánea y su diseminación a distintos órganos como el ojo y el cerebro",
      "la ingestión de huevos que se tornan infectantes luego de una a dos semanas de ser eliminados en las materias fecales de perros"
    ]
  },
  {
    "numb": 27,
    "question": "¿en cuál de las siguientes enteroparasitosis el método de graham (espátula adhesiva) constituye el método diagnóstico de elección? ",
    "answer": "oxiurosis",
    "options": [
      "oxiurosis",
      "giardiasis",
      "amebiasis",
      "ascaridiasis"
    ]
  },
  {
    "numb": 28,
    "question": "¿cuál de las siguientes características distingue a la hipoventilación alveolar de los otros mecanismos de hipoxemia? ",
    "answer": "la presencia de diferencia alvéolo-arterial de O2 normal",
    "options": [
      "su escasa respuesta al test de hiperoxia",
      "la hipocapnia que acompaña a la hipoxemia",
      "el presentarse principalmente durante el ejercicio",
      "la presencia de diferencia alvéolo-arterial de O2 normal"
    ]
  },
  {
    "numb": 29,
    "question": "Un paciente ingresa al servicio de emergencia con disnea, polipnea y fiebre. Se realiza diagnóstico de neumonia aguda comunitaria. La gasometría con oxigenoterapia de alto flujo (fracción inspirada de o2 = 60%) evidencia: pao2 100 mmhg, paco2 25 mmhg, pafio2 167. Indique la opción correcta en relación a un posible diagnóstico de insuficiencia respiratoria (ir) en este paciente: ",
    "answer": "presenta IR tipo i",
    "options": [
      "no presenta ir",
      "presenta IR tipo i",
      "presenta IR tipo ii",
      "faltan datos para poder establecer el diagnóstico de ir"
    ]
  },
  {
    "numb": 30,
    "question": "¿cuál de los siguientes fenómenos determina shunt como mecanismo de insuficiencia respiratoria?",
    "answer": "colapso del espacio alveolar",
    "options": [
      "hipersinsuflación pulmonar",
      "colapso del espacio alveolar",
      "compresión dinámica de la pequeña vía aérea",
      "engrosamiento de la membrana alvéolo-capilar"
    ]
  },
{
    "numb": 31,
    "question": "Considerando la ecuación del movimiento para el sistema respiratorio, indique cuál de los siguientes parámetros se opone a un aumento del volumen en el sistema: ",
    "answer": "elastancia",
    "options": [
      "inercia",
      "elastancia",
      "complacencia",
      "resistencia friccional"
    ]
  },
  {
    "numb": 32,
    "question": "Un paciente politraumatizado ingresa al servicio de emergencia con hipotensión arterial, taquicardia y relleno capilar lento, estableciéndose diagnóstico de rotura esplénica y shock. ¿cómo espera encontrar la presión auricular derecha (pa, y las resistencias vasculares periféricas (rvp)? ",
    "answer": "PAD disminuida, RVP aumentadas",
    "options": [
      "PAD disminuida, RVP disminuidas",
      "PAD disminuida, RVP aumentadas",
      "PAD aumentada, RVP disminuidas",
      "PAD aumentada, RVP aumentadas"
    ]
  },
  {
    "numb": 33,
    "question": "En el paciente de la pregunta anterior, indique cuál de los siguientes sería un mecanismo de compensación esperado debido al estado de shock que presenta:",
    "answer": "aumento de la extracción periférica de o2",
    "options": [
      "vasoconstricción pulmonar hipóxica",
      "inhibición de la respiración mitocondrial",
      "aumento de la extracción periférica de o2",
      "disminución de la síntesis de eritropoyetina"
    ]
  },
  {
    "numb": 34,
    "question": "¿cuál de las siguientes situaciones favorece la hiperpotasemia? ",
    "answer": "acidosis metabólica",
    "options": [
      "liberación de insulina",
      "hipoosmolaridad",
      "acidosis metabólica",
      "uso de beta 2 adrenérgicos"
    ]
  },
  {
    "numb": 35,
    "question": "En la insuficiencia cardíaca crónica se producen alteraciones estructurales y neurohumorales. En relación a estas alteraciones marque la opción correcta:",
    "answer": "es característica la replicación sarcomérica en paralelo cuando la etiología de la ic es una estenosis aórtica severa",
    "options": [
      "los niveles circulantes de endotelina se encuentran disminuidos",
      "altos niveles de bnp circulantes conducen a la fibrosis miocárdica",
      "el aumento de la presión de fin de diástole determina inhibición de la liberación de bnp",
      "es característica la replicación sarcomérica en paralelo cuando la etiología de la ic es una estenosis aórtica severa"
    ]
  },
  {
    "numb": 36,
    "question": "Marque la afirmación correcta en relación a la insuficiencia cardíaca con fevi (fracción de eyección del ventrículo izquierdo) preservada: ",
    "answer": "el flujo sanguíneo coronario en reposo suele estar aumentado respecto a un individuo sano",
    "options": [
      "la presión diastólica final suele ser normal o baja",
      "la etiología más frecuente es el infarto agudo de miocardio",
      "el flujo sanguíneo coronario en reposo suele estar aumentado respecto a un individuo sano",
      "en este contexto la insuficiencia mitral suele producirse por dilatación del ventrículo izquierdo"
    ]
  },
  {
    "numb": 37,
    "question": "Indique la afirmación correcta en con respecto al flujo sanguíneo coronario y al consumo miocárdico de oxígeno: ",
    "answer": "la infusión de un agonista beta 1 adrenérgico determinaría un aumento del consumo miocárdico de oxígeno",
    "options": [
      "la reserva de flujo coronario se hace mayor a medida que el individuo envejece",
      "la infusión de un agonista beta 1 adrenérgico determinaría un aumento del consumo miocárdico de oxígeno",
      "el sitio de mayor resistencia al flujo sanguíneo coronario en reposo en condiciones fisiológicas son las arterias epicárdicas",
      "los esơmulos cronotrópicos negativos determinan un aumento del consumo miocárdico de oxígeno y por lo tanto del riesgo de sufrir isquemia"
    ]
  },
  {
    "numb": 38,
    "question": "¿cuál de las siguientes variables está incluida en la fórmula de contenido arterial de oxígeno (cao2) que cuantifica la cantidad de oxígeno transportada en la sangre?",
    "answer": "el coeficiente de solubilidad del oxígeno en el plasma",
    "options": [
      "el hematocrito",
      "la presión parcial arterial de co2 (paco2)",
      "el coeficiente de solubilidad del oxígeno en el plasma",
      "la concentración de albúmina plasmática expresada en g/dl"
    ]
  },
  {
    "numb": 39,
    "question": "Hemodinámicamente, la fisiopatología de la hipertensión endocraneana se asocia a la denominada cascada vasodialatadora. ¿cuál de los siguientes esquemas representa esa cascada? Ppc: presión de perfusión cerebral; vsc: volumen sanguíneo cerebral; pic: presión intracraneana.",
    "answer": "descenso de la PPC → vasodilatación → aumento del VSC → aumento de la PIC.",
    "options": [
      "descenso de la PPC → disminución del VSC → vasodilatación → aumento de la PIC.",
      "descenso de la PPC → vasodilatación → aumento del VSC → aumento de la PIC.",
      "aumento de la PPC → vasodilatación → aumento del VSC → aumento de la PIC."
    ]
  },
  {
    "numb": 40,
    "question": "¿cuál de las situaciones siguientes favorece la hipopotasemia? ",
    "answer": "alcalosis metabólica",
    "options": [
      "hiponatremia",
      "hipernatremia",
      "acidosis metabólica",
      "alcalosis metabólica"
    ]
  },
  {
    "numb": 41,
    "question": "Paciente de 28 años, politraumatizado con rotura esplénica. Ingresa en shock hipovolémico, por lo que se comienza la reposición hidroelectrolítica y hematológica, con mejoría de la hemodinamia sistémica. En la tabla, se muestra la evaluación de la función renal\nIMAGEN\n¿cuál es mecanismo fisiopatológico más probable de la injuria renal aguda en este paciente? ",
    "answer": "pre-renal",
    "options": [
      "pre-renal",
      "post- renal",
      "parenquimatosa"
    ],
    "image": "https://raw.githubusercontent.com/Ezeote/medquizz/refs/heads/main/BCP/images/BCP-07022022-p41.png" // Add the image URL here
  },
  {
    "numb": 42,
    "question": "Señale la afirmación correcta sobre el metabolismo hepático de morfina: ",
    "answer": "su principal metabolito activo es morfina-6-glucurónido (M6G)",
    "options": [
      "codeína es un metabolito activo de morfina",
      "el metabolito morfina-3-glucurónido posee efecto analgésico",
      "su principal metabolito activo es morfina-6-glucurónido (M6G)",
      "la principal vía de metabolismo es a través de los citocromos cyp450"
    ]
  },
  {
    "numb": 43,
    "question": "¿cuál de las siguientes características define a un fármaco como agonista puro o total?",
    "answer": "tiene actividad intrínseca máxima.",
    "options": [
      "carece de afinidad por el receptor.",
      "tiene actividad intrínseca máxima.",
      "se une al receptor en estado inactivo.",
      "se une al receptor a un sitio diferente al del ligando."
    ]
  },
  {
    "numb": 44,
    "question": "¿cuál de las siguientes características farmacocinéticas justifica la monitorización plasmática de un fármaco? ",
    "answer": "rango terapéutico estrecho.",
    "options": [
      "cinética de eliminación lineal.",
      "rango terapéutico estrecho.",
      "amplio volumen de distribución.",
      "poca correlación concentración plasmática/efecto."
    ]
  },
  {
    "numb": 45,
    "question": "¿cuál de los siguientes es un efecto farmacológico extra-bronquial de teofilina, útil en la crisis asmática?",
    "answer": "aumento de la contractilidad del diafragma.",
    "options": [
      "ansiolisis y sedación.",
      "disminución del inotropismo cardíaco.",
      "inhibición del centro respiratorio a nivel bulbar.",
      "aumento de la contractilidad del diafragma."
    ]
  },
  {
    "numb": 46,
    "question": "¿cuál de las siguientes es una característica de la modulación alostérica del receptor gabaa producida por benzodiazepinas? ",
    "answer": "se une al receptor en un sitio distinto al del ligando endógeno.",
    "options": [
      "aumenta la concentración intracelular de amp cíclico.",
      "disminuye la frecuencia de apertura del canal iónico de cloro.",
      "produce cambios conformacionales que inactivan el receptor.",
      "se une al receptor en un sitio distinto al del ligando endógeno."
    ]
  },
  {
    "numb": 47,
    "question": "El mecanismo de acción de ciprofloxacina es a través de la inhibición de: ",
    "answer": "la ADN girasa.",
    "options": [
      "la ADN girasa.",
      "la síntesis de arn ribosomal.",
      "la síntesis de la pared bacteriana.",
      "el metabolismo del ácido fólico bacteriano."
    ]
  },
  {
    "numb": 48,
    "question": "¿cuál de los siguientes es una reacción adversa frecuente vinculada al uso de betalactámicos? ",
    "answer": "diarrea secundaria a alteración de la microbiota intestinal.",
    "options": [
      "cefalea por vasodilatación arterial meníngea.",
      "hipotensión ortostática por vasodilatación sistémica.",
      "shock anafiláctico por hipersensibilidad exacerbada.",
      "diarrea secundaria a alteración de la microbiota intestinal."
    ]
  },
  {
    "numb": 49,
    "question": "El uso de trimetoprim con sulfametoxazol se basa en el sinergismo de potenciación debido a: ",
    "answer": "bloqueo secuencial de la síntesis de ácido fólico.",
    "options": [
      "bloqueo secuencial de la síntesis de ácido fólico.",
      "inhibición de la adn girasa en dos puntos distintos.",
      "inhibición de la síntesis proteica en dos niveles diferentes.",
      "sulfametoxazol aumenta la penetración intracelular de trimetoprim."
    ]
  },
  {
    "numb": 50,
    "question": "Los efectos vinculados al antagonismo muscarínico (ej: boca seca, estreñimiento taquicardia) se ven más frecuentemente con:",
    "answer": "Antihistamínicos.",
    "options": [
      "Antifúngicos.",
      "Betabloqueantes.",
      "Benzodiazepinas.",
      "Antihistamínicos."
    ]
  },
  {
    "numb": 51,
    "question": "¿cuál de los siguientes es un efecto farmacológico cardiovascular de atenolol?",
    "answer": "cronotropismo negativo a nivel del nodo sinusal.",
    "options": [
      "aumento del consumo miocárdico de oxígeno.",
      "cronotropismo negativo a nivel del nodo sinusal.",
      "inotropismo positivo a nivel del miocardio inespecífico.",
      "aumento de la velocidad de conducción en el nodo auriculoventricular."
    ]
  },
  {
    "numb": 52,
    "question": "¿cuál de los siguientes fármacos analgésicos presenta mayor efecto antiinflamatorio? ",
    "answer": "Diclofenac.",
    "options": [
      "Tramadol.",
      "Fentanilo.",
      "Diclofenac.",
      "Paracetamol."
    ]
  },
  {
    "numb": 53,
    "question": "Respecto del decaimiento de una muestra radiactiva: ",
    "answer": "su cinética se puede describir como una exponencial decreciente.",
    "options": [
      "se mide en unidades sievert.",
      "es independiente del tipo de átomo radiactivo.",
      "la actividad disminuye linealmente con el tiempo.",
      "su cinética se puede describir como una exponencial decreciente."
    ]
  },
  {
    "numb": 54,
    "question": "Al comparar curvas de sobrevida sin fraccionamiento de dosis versus con fraccionamiento de dosis se puede observar que la pendiente de la curva: ",
    "answer": "es mayor al no haber fraccionamiento de dosis",
    "options": [
      "no se altera con el fraccionamiento de dosis",
      "es mayor al no haber fraccionamiento de dosis",
      "es menor al no haber fraccionamiento de dosis"
    ]
  },
  {
    "numb": 55,
    "question": "¿cuál de las siguientes es una característica de los efectos estocásticos de las radiaciones ionizantes?",
    "answer": "pueden generarse con una sola exposición a alta o baja dosis.",
    "options": [
      "se producen a partir de una dosis umbral.",
      "muestran una clara relación entre causa y efecto.",
      "la severidad aumenta exponencialmente con la dosis.",
      "pueden generarse con una sola exposición a alta o baja dosis."
    ]
  },
  {
    "numb": 56,
    "question": ". En un servicio de diagnóstico por imágenes, se asegura cumplir con el principio de justificación cuando: ",
    "answer": "El beneficio de la exposición es mayor que el costo.",
    "options": [
      "Se aplican límites de dosis para la población general",
      "El beneficio de la exposición es mayor que el costo.",
      "Se repite el procedimiento sin importar el costo"
    ]
  },
  {
    "numb": 57,
    "question": "¿Cuál de las siguientes afirmaciones sobre la necrosis celular es correcta? ",
    "answer": "la retracción nuclear y aumento de la basofilia se conoce como picnosis",
    "options": [
      "la cariólisis es la fragmentación del núcleo picnótico.",
      "la retracción nuclear y aumento de la basofilia se conoce como picnosis",
      "es característico el daño mitocondrial grave sin rotura de la membrana plasmática.",
      "la cariorexis nuclear es el resultado de la pérdida de adn por degradación enzimática."
    ]
  },
  {
    "numb": 58,
    "question": "Con respecto a los tejidos corporales, ¿cuál de las siguientes afirmaciones es correcta? ",
    "answer": "los tejidos lábiles se dividen continuamente",
    "options": [
      "los tejidos estables no pueden regenerarse",
      "los tejidos permanentes de regeneran rápido",
      "los tejidos estables se dividen continuamente",
      "los tejidos lábiles se dividen continuamente"
    ]
  },
  {
    "numb": 59,
    "question": "Una mujer de 36 años con neumonía neumocócica desarrolla un derrame pleural. El estudio del líquido pleural muestra una gran cantidad de leucocitos polimorfonucleares (neutrófilos). ¿cuál de las siguientes opciones describe mejor este derrame pleural?",
    "answer": "exudado purulento",
    "options": [
      "trasudado",
      "exudado fibrinoso",
      "exudado purulento",
      "exudado serosanguínolento"
    ]
  },
  {
    "numb": 60,
    "question": "Un hombre de 71 años se realiza biopsia de próstata aumentada de tamaño. El informe anatomopatológico describe microscópicamente nódulos de glándulas con estroma fibromuscular sin atipias citológicas. ¿cuál de los siguientes procesos patológicos probablemente se haya producido en su próstata? ",
    "answer": "hiperplasia",
    "options": [
      "apoptosis",
      "esteatosis",
      "hipertrofia",
      "hiperplasia"
    ]
  }

];
