// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "Cuál de las siguientes especies de artrópodos es vector de Leishmania infantum?",
    answer: "Lutzomyia longipalpis",
    options: [
      "Lutzomyia longipalpis",
      "Triatoma infestans",
      "Cimex lectularius",
      "Aedes aegypti",
      "Culex pipiens"
    ]
  },
  {
    numb: 2,
    question: "¿Cuál de las siguientes parasitosis puede ser transmitida por vectores mecánicos? ",
    answer: "Giardiasis",
    options: [
      "Enfermedad de Chagas",
      "Leishmaniasis",
      "Giardiasis",
      "Paludismo"
    ]
  },
  {
    numb: 3,
    question: "¿Cuál es la complicación más frecuente de la pediculosis capitis?",
    answer: "infección bacteriana secundaria",
    options: [
      "pigmentación parda del cuero cabelludo",
      "transmisión de tifus exantemático",
      "anemia microcítica e hipocrómica",
      "infección bacteriana secundaria"
    ]
  },
  {
    numb: 4,
    question: "¿Cuál de las siguientes larvas formadoras de miasis necesitan un insecto hematófago para completar su ciclo de vida?",
    answer: "Dermatobia hominis",
    options: [
      "Cochliomyia hominivorax",
      "Dermatobia hominis",
      "Musca domestica",
      "Sarcophaga spp"
    ]
  },
  {
    numb: 5,
    question: "¿Cuál es el género de dermatofitos que se aísla con más frecuencia en las onicomicosis?",
    answer: "Trichophyton",
    options: [
      "Epidermophyton",
      "Trichophyton",
      "Microsporum",
      "Nannizzia"
    ]
  },
  {
    numb: 6,
    question: "¿Cuál es el reservorio de Histoplasma capsulatum?",
    answer: "Excretas de aves",
    options: [
      "Cuevas de armadillos",
      "Corteza de árboles",
      "Excretas de aves",
      "Suelo arenoso"
    ]
  },
  {
    numb: 7,
    question: "¿Cuál de los siguientes procedimientos es el más adecuado para examinar una muestra biológica mediante microscopía directa en un estudio micológico, para el diagnóstico de criptococosis?",
    answer: "Tinta china",
    options: [
      "Zielh Neelsen modificado",
      "Tinta china",
      "Giemsa",
      "Gomori"
    ]
  },
  {
    numb: 8,
    question: "¿Qué método diagnóstico utilizaría para diagnosticar la enfermedad de Chagas en un paciente en etapa aguda? ",
    answer: "xenodiagnóstico con el insecto vector como medio biológico de cultivo",
    options: [
      "extendido y tinción panóptica del material de punción de médula ósea",
      "frotis por aposición y tinción con Giemsa de biopsia de nódulo linfático",
      "inmunofluorescencia indirecta para búsqueda de anticuerpos en suero",
      "xenodiagnóstico con el insecto vector como medio biológico de cultivo"
    ]
  },
  {
    numb: 9,
    question: "¿Dónde podemos encontrar ooquistes de Toxoplasma gondii?",
    answer: "Materia fecal de felinos",
    options: [
      "Materia fecal de cánidos",
      "Materia fecal de felinos",
      "Carne vacuna cruda",
      "Carne suina cruda"
    ]
  },
  {
    numb: 10,
    question: "¿Cuál es la forma infectante para el humano del parásito Echinococcus granulosus? ",
    answer: "Huevo",
    options: [
      "Proglótide",
      "Huevo",
      "Adulto",
      "Larva"
    ]
  },
  {
    numb: 11,
    question: "¿Cuál de las siguientes zoonosis corresponde a una infección emergente en Uruguay? ",
    answer: "leishmaniasis visceral",
    options: [
      "distomatosis hepática",
      "leishmaniasis visceral",
      "esporotricosis",
      "paludismo"
    ]
  },
  {
    numb: 12,
    question: "¿Cuál de los siguientes helmintos tiene un ciclo de vida heteroxeno?",
    answer: "Fasciola hepatica",
    options: [
      "Enterobius vermicularis",
      "Ascaris lumbricoides",
      "Trichuris trichiura",
      "Fasciola hepatica"
    ]
  },
  {
    numb: 13,
    question: "¿Por qué se recomienda utilizar la espátula adhesiva en lugar del examen coproparasitario como método diagnóstico para detectar oxiurosis?",
    answer: "porque la espátula captura los huevos del parásito adheridos a la zona perianal donde las hembras los depositan",
    options: [
      "porque en las heces se observan las formas larvales de los parásitos que son difíciles de diferenciar morfológicamente de otras especies",
      "porque los parásitos adultos luego de la cópula y la oviposición emigran a sitios anatómicos vecinos y no se observan en las heces",
      "porque los huevos del parásito eliminados en las heces se deterioran rápidamente y es muy difícil su identificación microscópica",
      "porque la espátula captura los huevos del parásito adheridos a la zona perianal donde las hembras los depositan"
    ]
  },
  {
    numb: 14,
    question: "Indique cuál de los siguientes microorganismos, agentes de gastroenterocolitis aguda, presenta como mecanismo patogénico la adherencia íntima a los enterocitos, induciendo la formación de pedestales y un efecto de borramiento de las microvellosidades",
    answer: "Escherichia coli enteropatogénica",
    options: [
      "Shigella flexnerii",
      "Salmonella entérica",
      "Campylobacter jejuni",
      "Escherichia coli enterotoxigénica",
      "Escherichia coli enteropatogénica"
    ]
  },
  {
    numb: 15,
    question: "¿Cuál es el sitio blanco y el mecanismo de acción de ciprofloxacina?",
    answer: "Actúa uniéndose a las ADN girasas inhibiendo la replicación del ADN",
    options: [
      "Actúa uniéndose a las ADN girasas inhibiendo la replicación del ADN",
      "Actúa uniéndose al ADN cromosómico inhibiendo la replicación del ADN",
      "Actúa uniéndose a la subunidad ribosomal 50S inhibiendo la síntesis de proteínas",
      "Actúa uniéndose a la subunidad ribosomal 30S inhibiendo la síntesis de proteínas"
    ]
  },
  {
    numb: 16,
    question: "¿Cuál de los siguientes es un mecanismo patogénico de E. coli uropatógena que le permite evadir la respuesta inmune?",
    answer: "Su capacidad de formar comunidades bacterianas intracelulares",
    options: [
      "Su capacidad de formar comunidades bacterianas intracelulares",
      "La producción de enzimas con actividad citotóxica para leucocitos",
      "La producción de enzimas que inhiben la formación del fagolisosoma",
      "Su capacidad de adherirse al epitelio urotelial mediante fimbrias poco inmunogénicas"
    ]
  },
  {
    numb: 17,
    question: "Una cepa de Escherichia coli aislada a partir de una infección urinaria, presenta el siguiente resultado en el estudio de susceptibilidad a antibióticos:\nResistencia a ampicilina, cefazolina, cefuroxime, cenriaxona.\nTest de sinergia positivo entre Amoxicilina-clavulánico y cenriaxona\n¿Cuál es el mecanismo más probable de resistencia a betalactámicos en esta cepa?\n",
    answer: "Producción de betalactamasas de espectro extendido",
    options: [
      "Producción de betalactamasas de tipo AMP-C",
      "Producción de betalactamasas de espectro ampliado",
      "Producción de betalactamasas de espectro extendido",
      "Modificación del sitio blanco por adquisición de un nuevo tipopo de PBP",
      "Modificación del sitio blanco por acumulación de cambios en una PBP"
    ]
  },
  {
    numb: 18,
    question: "En un niño de 2 años con sintomatología de meningoencefalitis, se sospecha de etiología neumocócica ¿Qué características espera encontrar en el estudio citoquímico del líquido cefalorraquídeo?",
    answer: "Aspecto turbio valores disminuidos de glucosa y celularidad aumentada",
    options: [
      "Aspecto turbio valores normales de glucosa y celularidad normal",
      "Aspecto claro valores disminuidos de glucosa y celularidad normal",
      "Aspecto turbio valores disminuidos de glucosa y celularidad normal",
      "Aspecto claro valores normales de glucosa y celularidad aumentada",
      "Aspecto turbio valores disminuidos de glucosa y celularidad aumentada"
    ]
  },
  {
    numb: 19,
    question: "En un recién nacido se realiza diagnóstico de meningoencefalitis. El líquido cefalorraquídeo se procesa para estudio citoquímico y microbiológico. El examen microscópico directo muestra células inflamatorias y cocos gram positivos en cadenas.\nEn base a estos hallazgos, ¿cuál es el agente más probable de este caso?\n",
    answer: "Streptococcus agalactiae",
    options: [
      "Neisseria meningitidis",
      "Listeria monocytogenes",
      "Streptococcus agalactiae",
      "Streptococcus pneumoniae",
      "Haemophilus influenzae de tipo b"
    ]
  },
  {
    numb: 20,
    question: "¿Cuál de las siguientes opciones corresponde con las características estructurales de las particulas virales de Herpesvirus?",
    answer: "Son virus con envoltura y genoma de ADN doble hebra",
    options: [
      "Son virus desnudos con genoma de ADN doble hebra",
      "Son virus con envoltura y genoma de ADN doble hebra",
      "Son virus con envoltura y genoma de ARN de simple hebra y polaridad positiva",
      "Son virus desnudos y con genoma de ARN de simple hebra y polaridad positiva",
      "Son virus con envoltura y genoma de ARN de simple hebra y polaridad negativa"
    ]
  },
  {
    numb: 21,
    question: "La resistencia adquirida a antibióticos betalactámicos puede deberse a diferentes mecanismos. ¿Cuál de las siguientes especies bacterianas presenta como principal mecanismo la recombinación en genes codificantes de PBPs, resultando en un aumento gradual de la CIM a betalactámicos?",
    answer: "Streptococcus pneumoniae",
    options: [
      "Enterococcus faecalis",
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae"
    ]
  },
  {
    numb: 22,
    question: "La resistencia adquirida a antibióEcos betalactámicos puede deberse a diferentes mecanismos.\n¿Cuál de las siguientes especies bacterianas presenta como principal mecanismo la adquisición de un nuevo gen codificante para una PBP, resultando en un aumento brusco de la CIM a betalactámicos?\n",
    answer: "Staphylococcus aureus",
    options: [
      "Enterococcus faecalis",
      "Staphylococcus aureus",
      "Klebsiella pneumoniae",
      "Streptococcus pyogenes",
      "Streptococcus pneumoniae"
    ]
  },
  {
    numb: 23,
    question: "¿Cómo se detecta en el antibiograma por disco difusión la resistencia inducible a eritromicina y clindamicina en una cepa de Staphylococcus aureus?",
    answer: "Colocando cercanos los discos de eritromicina y clindamicina y observando la rectificación del halo de clindamicina",
    options: [
      "Midiendo el diámetro de inhibición a eritromicina que debe ser al menos dos veces el de clindamicina",
      "Midiendo el diámetro de inhibición a clindamicina que debe ser al menos dos veces el de eritromicina",
      "Colocando cercanos los discos de eritromicina y clindamicina y observando la rectificación del halo de clindamicina",
      "Colocando cercanos los discos de eritromicina y clindamicina y observando la rectificación del halo de eritromicina"
    ]
  },
  {
    numb: 24,
    question: "Un paciente con diagnóstico de tuberculosis pulmonar que inició tratamiento antibiótico hace 2 meses concurre al control de seguimiento. ¿Cuál de las siguientes pruebas diagnósticas es útil en este caso para evaluar la respuesta al tratamiento?",
    answer: "Baciloscopía y cultivo de una muestra de expectoración",
    options: [
      "Baciloscopía y cultivo de una muestra de expectoración",
      "Detección de enzima adenosin deaminasa (ADA) en muestra de expectoración",
      "PCR para detección de ácidos nucleicos de Mycobacterium tuberculosis complex de una muestra de expectoración"
    ]
  },
  {
    numb: 25,
    question: "¿Cuál de los siguientes factores de virulencia de Streptococcus pyogenes es el que se asocia principalmente a la inducción de la respuesta que explica las complicaciones post estreptocócicas inmunomediadas?",
    answer: "Proteína M",
    options: [
      "Proteína M",
      "Alfa toxina",
      "Estreptolisina",
      "Toxina eritrogénica",
      "Toxina de shock tóxico"
    ]
  },
  {
    numb: 26,
    question: "¿Cuál de las siguientes características de la estructura de una particula viral puede asociarse con una mayor susceptibilidad a detergentes y desinfectantes, así como a una disminuida capacidad de persistencia en condiciones ambientales adversas como la desecación?",
    answer: "Que se trate de un virus envuelto",
    options: [
      "Que se trate de un virus envuelto",
      "Que se trate de un virus desnudo",
      "Que presente una cápside icosaédrica",
      "Que presente una alta proporción de proteínas y glicoproteínas de superficie"
    ]
  },
  {
    numb: 27,
    question: "Para realizar el diagnóstico etiológico de las infecciones respiratorias de etiología viral se utiliza habitualmente el hisopado nasofaríngeo, sin embargo, esta muestra no es útil para realizar el diagnóstico etiológico de las neumonías agudas de etiología bacteriana. Esto se debe a que muchas de las especies bacterianas que causan con frecuencia neumonía:",
    answer: "pueden formar parte de la microbiota nasofaríngea y no ser el agente causal",
    options: [
      "pueden formar parte de la microbiota nasofaríngea y no ser el agente causal",
      "son erradicadas rápidamente de la nasofaringe luego de alcanzar el tracto respiratorio inferior",
      "frecuentemente alcanzan el tejido pulmonar por vía hematógena y no colonizan la nasofaringe"
    ]
  },
  {
    numb: 28,
    question: "¿Cuál es la principal utilidad de los tests treponémicos rápidos para sífilis en la embarazada?",
    answer: "Facilitan la pesquisa y tratamiento in situ de sífilis",
    options: [
      "Facilitan la pesquisa y tratamiento in situ de sífilis",
      "Monitorean la respuesta al tratamiento antibiótico",
      "Confirman el diagnóstico de sífilis en el recién nacido",
      "Permiten diferenciar entre sífilis activa e infecciones pasadas"
    ]
  },
  {
    numb: 29,
    question: "¿Qué factor afecta principalmente la biodisponibilidad oral de un fármaco?",
    answer: "Metabolismo de primer paso",
    options: [
      "Excreción renal",
      "Volumen de distribución",
      "Metabolismo de primer paso",
      "Unión a proteínas plasmáticas"
    ]
  },
  {
    numb: 30,
    question: "Una de las vías de administración de los medicamentos es la sublingual. ¿Cuál sería su principal ventaja?",
    answer: "Evita el metabolismo de primer paso hepático e intestinal",
    options: [
      "Mayor superficie de absorción",
      "La biodisponibilidad por esta vía es completa",
      "Limita su efecto a un órgano o tejido específico",
      "Evita el metabolismo de primer paso hepático e intestinal"
    ]
  },
  {
    numb: 31,
    question: "¿Cuál de los siguientes enunciados describe el concepto de vida media de eliminación de un fármaco?",
    answer: "Tiempo requerido para que la concentración plasmática se reduzca a la mitad",
    options: [
      "Tiempo requerido para que la concentración plasmática se reduzca a la mitad",
      "Tiempo requerido para que el fármaco sea completamente eliminado del cuerpo",
      "iempo requerido para que el fármaco alcance su concentración máxima en el plasma",
      "Tiempo requerido para que el fármaco se distribuya uniformemente en todos los tejidos"
    ]
  },
  {
    numb: 32,
    question: "Un fármaco “X” presenta una alta tasa metabólica hepática y excreción renal de 10%. De la anamnesis farmacológica se destaca la presencia del fármaco “Y” el cual presenta interacción con “X” a nivel de la CYP 3A4, comportándose como inductor. ¿Qué conducta terapéutica consideraría para evitar los efectos negativos de esta interacción?",
    answer: "Debería subir la dosis de “X” dado que en presencia de “Y” presentará mayor eliminación",
    options: [
      "Debe disminuir la dosis de “X” ya que “Y” podría favorecer concentraciones tóxicas “X”",
      "Debería subir la dosis de “X” dado que en presencia de “Y” presentará mayor eliminación",
      "Mantener la misma dosis de “X” dado que la presencia de “Y” no conlleva cambios farmacocinéticos"
    ]
  },
  {
    numb: 33,
    question: "En un paciente que cursa con cirrosis hepática e hipoalbuminemia, ¿Como esperaría encontrar el volumen aparente de distribución de un fármaco “A” que presenta una unión a proteínas plasmáticas cercana a 90%?",
    answer: "Aumentado",
    options: [
      "Disminuido",
      "Aumentado",
      "Sin cambios"
    ]
  },
  {
    numb: 34,
    question: "E¿Por cuál de los siguientes mecanismos los antiinflamatorios no esteroideos (AINE) pueden provocar lesiones gástricas?",
    answer: "Disminución de la producción de prostaglandinas en la mucosa gástrica",
    options: [
      "Incremento de la secreción de moco y bicarbonato en el estómago",
      "Disminución de la producción de ácido clorhídrico en el estómago",
      "Aumento de la producción de prostaglandinas en la mucosa gástrica",
      "Disminución de la producción de prostaglandinas en la mucosa gástrica"
    ]
  },
  {
    numb: 35,
    question: "¿Cuál de los siguientes aspectos farmacocinéticos de codeína es correcto?",
    answer: "Posee excreción renal alrededor del 10%.",
    options: [
      "Posee excreción renal alrededor del 10%.",
      "Presenta metabolismo principalmente intestinal.",
      "Su semivida de eliminación es aproximadamente 12 horas.",
      "Posterior a su administración oral posee biodisponibilidad cercana al 90%."
    ]
  },
  {
    numb: 36,
    question: "¿Cuál de los siguientes efectos adversos es frecuente con el uso de morfina?",
    answer: "Miosis",
    options: [
      "Miosis",
      "Diarrea",
      "Midriasis",
      "Dispepsia"
    ]
  },
  {
    numb: 37,
    question: "¿Cuál de los siguientes antibióticos presenta baja concentración en parénquima renal?",
    answer: "Nitrofurantoina",
    options: [
      "Amikacina",
      "Cefotaxima",
      "Ciprofloxacino",
      "Nitrofurantoina"
    ]
  },
  {
    numb: 38,
    question: "¿Cuál es un principio clave del uso racional de medicamentos que busca garantizar que los medicamentos tengan el efecto terapéutico deseado?",
    answer: "Efectividad",
    options: [
      "Seguridad",
      "Efectividad",
      "Minimización de costos",
      "Facilidad de administración"
    ]
  },
  {
    numb: 39,
    question: "En la insuficiencia cardíaca con fracción de eyección del ventrículo izquierdo (FEVI) preservada, ¿cómo se encuentra la presión diastólica final del ventrículo izquierdo?",
    answer: "Aumentada debido a la disfunción diastólica del ventrículo izquierdo",
    options: [
      "Disminuida debido a una relajación ventricular adecuada.",
      "Normal debido a la ausencia de alteraciones diastólicas.",
      "Aumentada debido a la disfunción diastólica del ventrículo izquierdo"
    ]
  },
  {
    numb: 40,
    question: "Durante un cateterismo cardíaco derecho con un catéter de Swan-Ganz, se mide la presión de oclusión pulmonar (PAOP). ¿Qué presión se está estimando de manera indirecta con esta medición?",
    answer: "La presión auricular izquierda",
    options: [
      "La presión aórtica media",
      "La presión auricular derecha",
      "La presión auricular izquierda",
      "La presión diastólica final del ventrículo derecho"
    ]
  },
  {
    numb: 41,
    question: "¿Cuál de los siguientes cambios fisiopatológicos corresponden a la insuficiencia cardíaca crónica (ICC)? AMBIGUA: A y B",
    answer: "descenso en la complacencia pulmonar por congestión pulmonar.",
    options: [
      "Inicio de disnea de esfuerzo por ICC con FEVI reducida.",
      "descenso en la complacencia pulmonar por congestión pulmonar.",
      "reducción de la dilatación ventricular izquierda por insuficiencia mitral funcional"
    ]
  },
  {
    numb: 42,
    question: "En el síndrome cardiohepático asociado a la ICA señale cuál es un biomarcador de función hepática:",
    answer: "La concentración plasmática de albúmina",
    options: [
      "La proteína C reactiva",
      "La concentración plasmática de albúmina",
      "La concentración plasmática de la alanino aminotransferasa",
      "La concentración plasmática de la gama-glutamil transferasa"
    ]
  },
  {
    numb: 43,
    question: "¿Cuál de los siguientes es uno de los mecanismos de la poliuria posobstructiva en la oclusión ureteral bilateral?",
    answer: "la pérdida en la capacidad de reabsorción de las nefronas yuxtaglomerulares",
    options: [
      "la pérdida de la función glomerular",
      "la disminución en la actividad de la hormona natriurética",
      "la pérdida en la capacidad de reabsorción de las nefronas yuxtaglomerulares",
      "la disminución de la urea a nivel plasmático, que arrastra consigo sodio y agua"
    ]
  },
  {
    numb: 44,
    question: "¿A qué se debe la hiperpotasemia en la enfermedad renal crónica extrema?",
    answer: "Ambos",
    options: [
      "Alteraciones del balance interno",
      "Alteraciones del balance externo",
      "Ambos"
    ]
  },
  {
    numb: 45,
    question: "¿Cuál es una de las consecuencias de la disminución de Na+ corporal total?",
    answer: "contracción del volumen del líquido extracelular",
    options: [
      "hiponatremia",
      "contracción del volumen del líquido extracelular",
      "expansión del volumen del líquido extracelular"
    ]
  },
  {
    numb: 46,
    question: "¿Cómo clasificaría la siguiente hiperpotasemia con respecto a su severidad? K+ 8 mEq/lt \nElectrocardiograma que informa: ritmo sinusal, 78 cpm, prolongación del intervalo QRS\n",
    answer: "severa",
    options: [
      "leve",
      "moderada",
      "severa"
    ]
  },
  {
    numb: 47,
    question: "Luego de un esguince de tobillo el paciente consulta por dolor. ¿Qué cambios espera que ocurran en la zona lesionada?",
    answer: "Hiperalgesia en la zona lesionada y zona circundante",
    options: [
      "Edema blando blanco frio",
      "Edema tisular con infiltracion eosinofilica",
      "Hiperalgesia en la zona lesionada y no en la zona circundante",
      "Hiperalgesia en la zona lesionada y zona circundante"
    ]
  },
  {
    numb: 48,
    question: "¿Cuál es el patrón característico del shock cardiogénico por falla ventricular izquierda?",
    answer: "Resistencias vasculares sistémicas aumentadas. presión capilar pulmonar aumentada y saturación venosa central descendida",
    options: [
      "Resistencias vasculares sistémicas descendidas. presión capilar pulmonar descendida y saturación venosa central descendida",
      "Resistencias vasculares sistémicas descendidas. presión capilar pulmonar aumentada y saturación venosa central aumentada o normal",
      "Resistencias vasculares sistémicas aumentadas. presión capilar pulmonar descendida y saturación venosa central descendida",
      "Resistencias vasculares sistémicas aumentadas. presión capilar pulmonar aumentada y saturación venosa central descendida"
    ]
  },
  {
    numb: 49,
    question: "Indique cuál de las siguientes secuencias describe el vínculo entre volumen sanguíneo cerebral (VSC), presión de perfusión cerebral (PPC) y presión intracraneana (PIC) en la denominada “cascada vasodilatadora” de la circulación cerebral:",
    answer: "Vasodilatación → ↑VSC → ↑PIC → ↓PPC",
    options: [
      "Vasodilatación → ↓VSC → ↓PIC → ↑PPC",
      "Vasodilatación → ↑VSC → ↑PIC → ↓PPC",
      "Vasodilatación → ↑PPC → ↑VSC → ↑PIC",
      "Vasodilatación → ↑PIC → ↓PPC → ↓PIC"
    ]
  },
  {
    numb: 50,
    question: "¿Cuál es la causa del vaciamiento pulmonar incompleto en las patologías pulmonares obstructivas?",
    answer: "Disminución de Tiempo espiratorio",
    options: [
      "Disminución de Tiempo espiratorio",
      "Aumento de la elastancia pulmonar",
      "Debilidad de los músculos espiratorios",
      "Aumento de la capacidad pulmonar total"
    ]
  },
  {
    numb: 51,
    question: "Indique cuál de los siguientes parámetros es imprescindible para realizar el diagnóstico de insuficiencia respiratoria:",
    answer: "Presión parcial arterial de O2",
    options: [
      "Frecuencia respiratoria",
      "Presión parcial arterial de O2",
      "Presión parcial arterial de CO2",
      "Saturación de O2 de la hemoglobina"
    ]
  },
  {
    numb: 52,
    question: "El mecanismo causal de las alteraciones endócrinas en el contexto de una insuficiencia hepatocítica se asocia a:",
    answer: "un incremento en el índice estrógenos/andrógenos.",
    options: [
      "un incremento en el índice estrógenos/andrógenos.",
      "una disminución en el índice estrógenos/andrógenos.",
      "un mantenimiento del índice estrógenos/andrógenos en rango normal."
    ]
  },
  {
    numb: 53,
    question: "En radiología diagnostica es común emplear fotones de 40 a 150 Kev de energía. ¿En estas condiciones como es el proceso de interacción de la radiación con la materia que se observa con mayor probabilidad?",
    answer: "Se produce efecto fotoeléctrico donde el fotón es absorbido totalmente al interaccionar con un electrón interno",
    options: [
      "Se produce efecto fotoeléctrico donde el fotón es absorbido totalmente al interaccionar con un electrón interno",
      "Se produce efecto fotoeléctrico donde el fotón interacciona con el campo eléctrico nuclear",
      "Se produce efecto fotoeléctrico donde el fotón se absorbe parcialmente al interaccionar con un electrón periférico",
      "Se produce efecto fotoeléctrico donde el fotón interacciona con un electrón periférico y produce radicales libres"
    ]
  },
  {
    numb: 54,
    question: "¿Cuál es una característica de la generación de efectos biológicos de las radiaciones ionizantes? ",
    answer: "suceden alteraciones en el ADN de forma indirecta al generar radicales libres",
    options: [
      "se producen exclusivamente mediante procesos químicos",
      "ocurren únicamente en células de tejidos altamente oxigenados",
      "suceden alteraciones en el ADN de forma indirecta al generar radicales libres",
      "la severidad de los efectos determinísticos es independiente de la dosis recibida."
    ]
  },
  {
    numb: 55,
    question: "¿Cuál de los siguientes factores puede aumentar la radiosensibilidad de los tejidos humanos?",
    answer: "Alta concentración de oxígeno en los tejidos y rápido índice de división celular.",
    options: [
      "Alta especialización celular y baja tasa de renovación tisular.",
      "Baja concentración de oxígeno en los tejidos y lento índice de división celular.",
      "Alta concentración de oxígeno en los tejidos y rápido índice de división celular."
    ]
  },
  {
    numb: 56,
    question: "¿Cuál de los siguientes principios físicos describe correctamente las bases de la ecografía médica?",
    answer: "Utiliza ondas sonoras generándose ecos cuya intensidad y tiempo de retorno permiten formar imágenes.",
    options: [
      "Utiliza ondas sonoras generándose ecos cuya intensidad y tiempo de retorno permiten formar imágenes.",
      "tiliza ondas electromagnéticas que al interaccionar con los tejidos genera ecos que se convierten en señales eléctricas.",
      "Utiliza ondas sonoras de muy baja frecuencia que permite la generación de ecos a través de medir la elasticidad de los tejidos.",
      "Utiliza ondas de radiofrecuencia para mapear la conductividad eléctrica de los tejidos a través de la generación de ecos que forman las imágenes."
    ]
  },
  {
    numb: 57,
    question: "¿Cuál de los siguientes hallazgos histológicos es característico de la inflamación aguda?",
    answer: "Acumulación de neutrófilos en el sitio de la lesión",
    options: [
      "Formación de granulomas",
      "Formación de tejido de granulación",
      "Presencia de linfocitos y plasmocitos",
      "Deposición de colágeno en el área afectada",
      "Acumulación de neutrófilos en el sitio de la lesión"
    ]
  },
  {
    numb: 58,
    question: "¿Cuál de los siguientes tipos celulares es el principal responsable de la formación de tejido de granulación y la cicatrización en la inflamación crónica?",
    answer: "Macrófagos",
    options: [
      "Linfocitos",
      "Mastocitos",
      "Neutrófilos",
      "Eosinófilos",
      "Macrófagos"
    ]
  },
  {
    numb: 59,
    question: "¿Qué contiene de forma tipica el centro de un granuloma tuberculoso a nivel histopatológico?",
    answer: "Necrosis caseosa",
    options: [
      "Necrosis caseosa",
      "Células plasmáticas",
      "Infiltrado denso de neutrófilos",
      "Abundantes vasos sanguíneos"
    ]
  },
  {
    numb: 60,
    question: "¿Cuál es el principal mecanismo patogénico subyacente en la hiperplasia endometrial?",
    answer: "Aumento de estrógenos sin la oposición adecuada de progestágenos",
    options: [
      "Aumento de la respuesta inmune mediada por células T",
      "Aumento de estrógenos sin la oposición adecuada de progestágenos",
      "Infección por ciertos genotipos de virus del papiloma humano (HPV)",
      "Desbalance hormonal debido a un exceso de progestágenos sin estrógenos"
    ]

  
},
// you can uncomment the below codes and make duplicate as more as you want to add question
// but remember you need to give thenumbvalue serialize like 1,2,3,5,6,7,8,9....

// {
//numb 6,//  question "Your Question is Here",
//  answer "Correct answer of the question is here",
//  options [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
// },
];
