// creating an array and passing the number, ques]tions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "¿Cuál de las siguientes es una función de la toxina de Panton Valentine producida por Staphylococcus aureus?",
    "answer": ["Alterar la membrana celular"],
    "options": [
      "Inhibir la fagocitosis",
      "Alterar la membrana celular",
      "Estimular la producción de interferón",
      "Estimular la producción de citoquinas"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 2,
    "question": "Paciente de 30 años, masculino, que consulta por una lesión abscedada en glúteo. Se aísla Staphylococcus aureus con el siguiente perfil en el antibiograma: Resistencia a cefoxitin, Test D entre eritromicina y Clindamicina positivo. ¿Cuál de los siguientes antibióticos elegiría para el tratamiento?",
    "answer": ["Trimetoprim sulfametoxazol"],
    "options": [
      "Cefradina",
      "Clindamicina",
      "Amoxicilina clavulánico",
      "Trimetoprim sulfametoxazol"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 3,
    "question": "¿Cuál es el principal mecanismo de transmisión del virus varicela zoster?",
    "answer": ["contacto directo con una persona infectada con lesiones tipo vesículas"],
    "options": [
      "contacto con saliva u orina de una persona infectada",
      "contacto indirecto a través de objetos contaminados (fomites)",
      "contacto directo con una persona infectada con lesiones tipo vesículas",
      "contacto directo con una persona infectada con lesiones en etapa costrosa"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 4,
    "question": "El síndrome de shock tóxico estreptocócico, es una manifestación de las infecciones por Streptococcus pyogenes que se asocia a shock y falla multiorgánica. ¿Cuál de los siguientes mecanismos se relacionan directamente con la patogenia de esta enfermedad?",
    "answer": ["la producción de exotoxinas que actúan como superantígenos"],
    "options": [
      "la producción de exotoxinas que actúan como superantígenos",
      "la expresión de la proteína M de superficie que actúa como superantígeno",
      "la producción de exotoxinas que inducen la producción de anticuerpos contra antígenos propio",
      "la expresión de la proteína M de superficie que induce la producción de anticuerpos contra antígenos propios"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 5,
    "question": "La principal vía de transmisión de VIH es la vía sexual. En Uruguay, entre el total de nuevos casos en los que se reporta la vía de transmisión ¿cuál es aproximadamente el porcentaje de los que adquieren la infección por esta vía?",
    "answer": ["99% de los casos"],
    "options": [
      "80% de los casos",
      "90% de los casos",
      "99% de los casos"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 6,
    "question": "Los enterovirus son agentes causales de meningitis viral, ¿cuál es su principal vía de transmisión?",
    "answer": ["Fecal-oral"],
    "options": [
      "Fecal-oral",
      "Respiratoria",
      "Ingesta de agua contaminada",
      "Contacto directo con individuos infectados"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 7,
    "question": "Ante un caso de un paciente con meningoencefalitis ¿frente a qué etiología está indicado realizar quimioprofilaxis antibiótica a los contactos estrechos?",
    "answer": ["Neisseria meningitidis"],
    "options": [
      "Neisseria meningitidis",
      "Streptococcus pneumoniae",
      "Cualquier etiología bacteriana o viral",
      "Cualquier etiología siempre que sea bacteriana"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 8,
    "question": "¿Cuál de los siguientes factores de virulencia de Escherichia coli media la adherencia e invasión a la célula del epitelio vesical? ",
    "answer": ["Pili tipo 1"],
    "options": [
      "Pili tipo 1",
      "Sideróforo",
      "Adhesina Dr",
      "Hemolisina A",
      "Factor citotóxico necrotizante"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 9,
    "question": "Usted está asistiendo a un niño que consulta por fiebre, dolor abdominal y diarrea con sangre. En el examen microscópico directo con azul de metileno se visualizan abundantes células polimorfonucleares.  En función de esta observación y del cuadro del paciente ¿Cuáles de los siguientes microorganismos podrían ser los agentes causales más probables?",
    "answer": ["Shigella o Salmonella"],
    "options": [
      "Shigella o Salmonella",
      "Norovirus o Adenovirus",
      "Escherichia coli enterotoxigénica (ETEC) o Rotavirus",
      "Escherichia coli enterohemorrágica (EHEC) o enteropatogénica (EPEC)"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 10,
    "question": "¿Cuál de los siguientes agentes es una de las causas más frecuentes de uretritis no gonocócica?",
    "answer": ["Chlamydia trachomatis"],
    "options": [
      "Treponema pallidum",
      "Trichomonas vaginalis",
      "Chlamydia trachomatis",
      "Papiloma virus humano",
      "Herpes simple de tipo 2"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 11,
    "question": "¿A qué se debe el mecanismo de resistencia a betalactámicos denominado PBP en mosaico?",
    "answer": ["Modificación del gen codificante de PBP por recombinación con material genético de especies afines"],
    "options": [
      "Mutación en el gen codificante de PBP",
      "dando lugar a una nueva PBP",
      "Deleción del gen codificante de PBP",
      "dando lugar a pérdida de éstas proteínas",
      "Adquisición de un plásmido conteniendo un gen codificante para una PBP nueva",
      "Modificación del gen codificante de PBP por recombinación con material genético de especies afines"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 12,
    "question": "El mecanismo de “PBP en mosaico” es el principal mecanismo de resistencia a antibióticos betalactámicos en:",
    "answer": ["Streptococcus pneumoniae"],
    "options": [
      "Escherichia coli",
      "Salmonella enterica",
      "Staphylococcus aureus",
      "Streptococcus pneumoniae"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 13,
    "question": "De un hemocultivo se aisló Escherichia coli con el siguiente perfil de susceptibilidad antibiótica: Sensible a: amikacina, fosfomicina, ciprofloxacina, meropenem, imipenem. Resistente a: ampicilina, amoxicilina clavulánico, cefuroxime, ceftriaxona, cefepime, trimetoprim sulfametoxazol ¿Cuál de los siguientes mecanismos explica la resistencia de esta cepa a antibióticos betalactámicos?",
    "answer": ["Betalactamasa de espectro extendido"],
    "options": [
      "Nueva PBP",
      "PBP en mosaico",
      "Carbapenemasa",
      "Betalactamasa de espectro ampliado",
      "Betalactamasa de espectro extendido"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 14,
    "question": "Considerando el perfil de resistencia de la E. coli del caso anterior, en el test de sinergia entre amoxicilina clavulánico y cefalosporinas de tercera generación usted espera encontrar:",
    "answer": ["Un agrandamiento del halo de inhibición de las cefalosporinas de tercera generación hacia donde se encuentra el disco de amoxicilina clavulánico"],
    "options": [
      "Ningún cambio en los halos de inhibición de las cefalosporinas de tercera generación",
      "Un agrandamiento del halo de inhibición de las cefalosporinas de tercera generación hacia donde se encuentra el disco de amoxicilina clavulánico",
      "Un agrandamiento del halo de inhibición de amoxicilina clavulánico hacia donde se encuentran los discos de cefalosporinas de tercera generación",
      "Un aplanamiento o rectificación del halo de inhibición de las cefalosporinas de tercera generación hacia donde se encuentra el disco de amoxicilina clavulánico",
      "Un aplanamiento o rectificación del halo de inhibición de amoxicilina clavulánico hacia donde se encuentran los discos de cefalosporinas de tercera generación"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 15,
    "question": "El virus influenza es un virus envuelto que posee glicoproteínas en la envoltura como la Hemaglutinina y la Neuraminidasa. La principal función de la hemaglutinina es:",
    "answer": ["Adherirse a los residuos de ácido siálico de los receptores celulares y favorecer la fusión de la envoltura con la célula epitelial"],
    "options": [
      "Inhibir la traducción del ARNm celular con la consiguiente muerte celular",
      "Interaccionar con la nucleocápside para facilitar el ensamblaje del virus luego de la replicación",
      "Escindir los residuos de ácido siálico de las células para permitir la liberación viral en las etapas finales de la replicación",
      "Adherirse a los residuos de ácido siálico de los receptores celulares y favorecer la fusión de la envoltura con la célula epitelial"
    ],
    "discipline": "Bacterio",
    "comment": "",
  },
  {
    "numb": 16,
    "question": "Una micosis es una afección causada por cuál de los siguientes fenómenos:",
    "answer": ["La invasión de los tejidos del hospedero por parte de micromicetos"],
    "options": [
      "La destrucción de los tejidos por micotoxinas de macromicetos",
      "La invasión de los tejidos del hospedero por parte de micromicetos",
      "La invasión de los tejidos del hospedero por parte de macromicetos",
      "La lesión producida por la intoxicación alimentaria con micotoxinas de micromicetos"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 17,
    "question": "¿Cuál de las siguientes características morfo-biológicas corresponde al hongo del complejo Sporothrix schenckii?",
    "answer": ["Es dimorfo y afecta el tejido subcutáneo con posible linfangitis"],
    "options": [
      "Es dimorfo y afecta el tejido subcutáneo con posible linfangitis",
      "Es levaduriforme y afecta principalmente las vías respiratorias",
      "Es un moho y afecta principalmente el sistema nervioso central",
      "Es filamentoso y afecta predominantemente la piel y las faneras"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 18,
    "question": "¿Qué espera observar en el examen micológico directo de una candidiasis superficial?",
    "answer": ["Levaduras con pseudofilamentos"],
    "options": [
      "Levaduras capsuladas",
      "Hifas hialinas y tabicadas",
      "Levaduras multi-brotantes",
      "Levaduras con pseudofilamentos",
      "Levaduras rodeadas por estructuras radiadas (clavas)"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 19,
    "question": "¿Cuál de los siguientes agentes es un hongo patógeno primario?",
    "answer": ["Histoplasma capsulatum"],
    "options": [
      "Candida tropicalis",
      "Aspergillus fumigatus",
      "Pneumocystis jirovecii",
      "Histoplasma capsulatum",
      "Cryptococcus neoformans"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 20,
    "question": "¿Cuál de las siguientes técnicas de laboratorio aplicadas a una muestra de lavado bronco-alveolar, es la más adecuada para el diagnóstico de neumocistosis?",
    "answer": ["Inmunofluorescencia directa"],
    "options": [
      "Tinción de Kinyoun",
      "Cultivo en agar Sabouraud",
      "Inmunofluorescencia directa",
      "Detección de galactomananos",
      "Estudio micológico directo con tinta china"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 21,
    "question": "¿Cuál de los siguientes mecanismos patogénicos corresponde a Pneumocystis jirovecii?",
    "answer": ["Adherencia a los neumocitos tipo I"],
    "options": [
      "Angioinvasión",
      "Neurotropismo",
      "Producción de pseudofilamentos",
      "Adherencia a los neumocitos tipo I",
      "Diseminación linfohemática a través de macrófagos alveolares"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 22,
    "question": "¿Cuál de los siguientes agentes que comprometen el aparato respiratorio, pueden generar hipereosinofilia en sangre periférica?",
    "answer": ["Strongyloides stercoralis"],
    "options": [
      "Cryptococcus spp",
      "Paracoccidioides spp",
      "Pneumocystis jirovecii",
      "Aspergillus spp complex",
      "Strongyloides stercoralis"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 23,
    "question": "¿Qué tipo de respuesta inmunitaria genera Toxoplasma gondii en humanos?",
    "answer": ["Celular (TH1) y humoral con producción de IgM e IgG"],
    "options": [
      "TH1 únicamente, con producción de IL-17",
      "Celular (TH1) únicamente, con producción de IL-6",
      "Humoral únicamente, con producción de IgM e IgG",
      "Celular (TH1) y humoral con producción de IgM e IgG"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 24,
    "question": "¿Cuál de los siguientes mecanismos patogénicos corresponden a Trichuris trichuria?",
    "answer": ["Acción expoliatriz por el consumo de sangre por los parásitos"],
    "options": [
      "Acción expoliatriz por el consumo de sangre por los parásitos",
      "Acción traumática por pasaje de larvas desde la mucosa hacia la luz intestinal",
      "Acción bacterífera por pasaje de larvas desde la luz intestinal hacia el torrente sanguíneo",
      "Acción mecánica por obstrucción intestinal con ovillos conformados por numerosos ejemplares"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 25,
    "question": "¿Cuál es la forma infectante de Taenia saginata para el hospedero definitivo? ",
    "answer": ["El estadio larvario o cisticerco que se encuentra en el hospedero intermediario"],
    "options": [
      "El escólex eliminado a través de las heces del hospedero intermediario",
      "El estadio larvario o cisticerco que se encuentra en el hospedero intermediario",
      "El quiste maduro eliminado a través de las heces del hospedero intermediario",
      "El huevo contenido en las proglótides grávidas eliminadas por el hospedero definitivo"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 26,
    "question": "Mujer de 20 años, estudiante, consulta por lesiones de piel pruriginosas, de 20 días de evolución. Al examen físico se constatan a nivel interdigital de manos, antebrazos, pliegues submamarios, mamas y axilas, pequeñas pápulas, algunos trayectos finos muy discretos y lesiones de rascado. Pareja con lesiones similares. ¿Cuál de los siguientes diagnósticos clínicos es el más probable?",
    "answer": ["Escabiosis"],
    "options": [
      "Phthiriasis",
      "Escabiosis",
      "Dermatomicosis por dermatofitos",
      "Pediculosis por Pediculus humanus var corporis"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 27,
    "question": "¿Qué características presenta un artrópodo para ser un vector biológico?",
    "answer": ["Se cumple en el propio artrópodo una etapa del ciclo biológico del agente patógeno que transmite"],
    "options": [
      "Transmite el agente infeccioso mediante mecanismos pasivos",
      "Transporta el agente infeccioso a través de sus patas contaminadas",
      "Se cumple en el propio artrópodo una etapa del ciclo biológico del agente patógeno que transmite",
      "Presenta una diapausa breve por la cual se generan rápidamente varias generaciones"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 28,
    "question": "En base a la normativa vigente y a la situación epidemiológica de la enfermedad de Chagas en el país, ¿a qué embarazadas les solicitaría el screening serológico?",
    "answer": ["A todas independientemente del departamento del que provengan"],
    "options": [
      "A las que presenten hábitos de consumo de carne mal cocida",
      "A las que manifiesten tener gatos como mascotas domésticas",
      "Solo a las que provienen de departamentos al norte del Rio Negro",
      "A todas independientemente del departamento del que provengan"
    ],
    "discipline": "Parasito",
    "comment": "",
  },
  {
    "numb": 29,
    "question": "¿Cuál de las siguientes formas de interacción de la radiación ionizante electromagnética con la materia involucra electrones fuertemente ligados al núcleo?",
    "answer": ["efecto fotoeléctrico"],
    "options": [
      "efecto Compton",
      "formación de pares",
      "colisión inelástica",
      "efecto fotoeléctrico"
    ],
    "discipline": "Biofisica",
    "comment": "",
  },
  {
    "numb": 30,
    "question": "¿Cuál de las siguientes opciones indica una característica del depósito de energía de la radiación en el material biológico?",
    "answer": ["es un proceso aleatorio"],
    "options": [
      "es un proceso aleatorio",
      "es un mecanismo lento",
      "produce lesiones específicas",
      "tiene selectividad de moléculas"
    ],
    "discipline": "Biofisica",
    "comment": "",
  },
{
    "numb": 31,
    "question": "¿Cuál de los siguientes principios generales de la Radioprotección es responsabilidad directa del médico prescriptor?",
    "answer": ["justificación"],
    "options": [
      "justificación",
      "optimización",
      "dosis de tolerancia",
      "dosis de referencia",
      "límites de exposición"
    ],
    "discipline": "Biofisica",
    "comment": "",
  },
  {
    "numb": 32,
    "question": "El recuento de cromosomas en anillo mediante la técnica de condensación prematura de cromosomas permite:",
    "answer": ["Estimar exposiciones agudas a dosis muy elevadas de radiaciones ionizantes"],
    "options": [
      "Estimar exposiciones agudas a dosis muy elevadas de radiaciones ionizantes",
      "Cuantificar la cantidad de micronúcleos generados por la exposición a radiación",
      "Cuantificar la cantidad de traslocaciones generadas por la exposición a radiación",
      "Estimar la dosis de radiación absorbida en personas sobreexpuestas 20 años atrás"
    ],
    "discipline": "Biofisica",
    "comment": "",
  },
  {
    "numb": 33,
    "question": "¿Qué cambios ocurren en el área de penumbra de un stroke isquémico?",
    "answer": ["Descenso del consumo de oxígeno cerebral"],
    "options": [
      "Aumento del flujo sanguíneo cerebral",
      "Descenso del consumo de oxígeno cerebral",
      "Descenso de la Resistencia vascular cerebral",
      "Aumento del volumen sanguíneo por unidad de tejido"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 34,
    "question": "En un paciente con neuro injuria aguda y autorregulación cerebral abolida, ¿qué cambios espera encontrar en la hemodinamia cerebral ante un aumento de la presión arterial sistémica?",
    "answer": ["Aumento de la presión intracraneana"],
    "options": [
      "Vasoconstricción cerebral",
      "Aumento de la presión intracraneana",
      "Descenso del flujo sanguíneo cerebral"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 35,
    "question": "¿Cuál de las siguientes alteraciones determina un descenso en la disponibilidad sistémica de oxígeno?",
    "answer": ["Anemia"],
    "options": [
      "Anemia",
      "Acidemia",
      "Hipotermia",
      "Niveles de 2.3 difosfoglicerato en plasma disminuidos"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 36,
    "question": "En un paciente con shock por un sangrado agudo, ¿qué alteraciones del metabolismo del oxígeno espera encontrar? ",
    "answer": ["Descenso de la disponibilidad sistémica de oxígeno (DO2)"],
    "options": [
      "Aumento del consumo sistémico de oxígeno (VO2)",
      "Descenso de la extracción sistémica de oxígeno (EO2)",
      "Descenso de la disponibilidad sistémica de oxígeno (DO2)",
      "Aumento de la saturación venosa central de oxígeno (svO2)"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 37,
    "question": "¿Qué patrón hemodinámico corresponde al shock cardiogénico?",
    "answer": ["Gasto cardiaco bajo, resistencias vasculares sistémicas altas, presión capilar pulmonar alta"],
    "options": [
      "Gasto cardiaco bajo, resistencias vasculares sistémicas bajas, presión capilar pulmonar alta",
      "Gasto cardiaco bajo, resistencias vasculares sistémicas altas, presión capilar pulmonar alta",
      "Gasto cardiaco Normal o elevado, resistencias vasculares sistémicas bajas, presión capilar pulmonar baja",
      "Gasto cardiaco bajo, resistencias vasculares sistémicas altas, presión capilar pulmonar baja"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 38,
    "question": "En un paciente con una crisis asmática severa, con insuficiencia respiratoria tipo I, una diferencia alvéolo arterial de oxígeno aumentada y una respuesta positiva al test de la hiperoxia, ¿cuál considera que podría ser el mecanismo generador de dicha insuficiencia?",
    "answer": ["Desigualdad V/Q"],
    "options": [
      "Desigualdad V/Q",
      "Shunt intrapulmonar",
      "Hipoventilación alveolar",
      "Trastorno de la difusión"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 39,
    "question": "Este mismo paciente se agrava en la evolución y agrega una hipercapnia. ¿Cuál considera que podría ser el mecanismo pulmonar generador de la misma? ",
    "answer": ["Desigualdad V/Q extrema"],
    "options": [
      "Shunt intrapulmonar",
      "Trastorno de la difusión",
      "Hipoventilación alveolar",
      "Desigualdad V/Q extrema"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 40,
    "question": "En pacientes con aumento de la rigidez arterial, la llegada de la onda refleja durante la sístole determina:",
    "answer": ["Aumento de la presión arterial central"],
    "options": [
      "Aumento de la perfusión coronaria",
      "Aumento de la presión arterial central",
      "Hipertrofia excéntrica del ventrículo izquierdo",
      "Disminución de la demanda miocárdica de oxígeno"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 41,
    "question": "El edema pulmonar generado en la insuficiencia cardíaca se debe a:",
    "answer": ["Aumento de la presión capilar pulmonar"],
    "options": [
      "Aumento de la presión venosa central",
      "Aumento de la presión capilar pulmonar",
      "Aumento de la poscarga del ventrículo derecho"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 42,
    "question": "¿Cuál de los siguientes eventos caracteriza al síndrome hepatorenal?",
    "answer": ["vasoconstricción renal"],
    "options": [
      "vasoconstricción renal",
      "disminución de óxido nítrico",
      "aumento del flujo a nivel renal"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 43,
    "question": "¿Cuál es la duración de una injuria renal aguda (necrosis tubular aguda) establecida aproximada?",
    "answer": ["14 a 21 días"],
    "options": [
      "1 a 2 días",
      "4 a 6 días",
      "14 a 21 días"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 44,
    "question": "¿Qué ocurre con la hemodinamia sistémica en la insuficiencia hepatocítica de forma más frecuente?",
    "answer": ["Vasodilatación sistémica y aumento de gasto cardíaco"],
    "options": [
      "Vasodilatación sistémica y aumento de gasto cardíaco",
      "Vasoconstricción sistémica y aumento de gasto cardiaco",
      "Vasodilatación sistémica y disminución del gasto cardiaco",
      "Vasoconstricción sistémica y disminución del gasto cardíaco"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 45,
    "question": "¿Cuál es la característica fisiopatológica de la hiponatremia crónica?",
    "answer": ["mayor riesgo de mielinolisis pontina en la corrección"],
    "options": [
      "mayor riesgo de edema cerebral",
      "menor riesgo de sobrecorrección",
      "menor riesgo de tener niveles extremos",
      "mayor riesgo de mielinolisis pontina en la corrección"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 46,
    "question": "¿Cuál de los siguientes hechos determina la entrada de potasio desde el plasma hacia las células?",
    "answer": ["insulina"],
    "options": [
      "insulina",
      "acidosis metabólica",
      "betabloqueantes",
      "hiperosmolaridad"
    ],
    "discipline": "Fisiopato",
    "comment": "",
  },
  {
    "numb": 47,
    "question": "Señale cuál de los siguientes es el mecanismo de acción de las benzodiacepinas: ",
    "answer": ["Agonismo alostérico del receptor GABA A"],
    "options": [
      "Agonismo directo del receptor GABA A",
      "Agonismo alostérico del receptor GABA A",
      "Antagonismo alostérico del receptor GABA B",
      "Antagonismo competitivo del receptor NMDA."
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 48,
    "question": "Indique cuál de los siguientes es un efecto adverso de morfina:",
    "answer": ["Estreñimiento"],
    "options": [
      "Midriasis",
      "Taquicardia",
      "Estreñimiento",
      "Aumento de la micción"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 49,
    "question": "¿Cuál es el mecanismo de resistencia más frecuente que presentan las Enterobacterias a los betalactámicos?",
    "answer": ["Producción de β-lactamasas"],
    "options": [
      "Modificación de la PBP",
      "Producción de β-lactamasas",
      "Aumento de la expresión de bombas de eflujo",
      "Alteración en la permeabilidad de la membrana celular"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 50,
    "question": "¿Cuál de los siguientes parámetros farmacocinéticos se verían modificados en fármacos de liberación modificada (Ej. liberación retardada) que se administran por vía oral? ",
    "answer": ["Disminución de la velocidad de absorción"],
    "options": [
      "Disminución del Tmax",
      "Aumento del volumen de distribución",
      "Aumento de la vida media de eliminación",
      "Disminución de la velocidad de absorción"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 51,
    "question": "Marque lo correcto con relación a las vías de administración de medicamentos:",
    "answer": ["La vía sublingual constituye una vía enteral"],
    "options": [
      "La vía sublingual constituye una vía enteral",
      "La vía intramuscular asegura una biodisponibilidad de 100%",
      "La vía oral es una vía parenteral. no constituye una vía sistémica",
      "La vía inhalatoria no es pasible de procesos metabólicos. no presenta metabolización"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 52,
    "question": "Con relación al perfil PK/PD de los antibióticos, marque lo correcto:",
    "answer": ["La efectividad de los antibióticos tiempo dependientes está dada por el tiempo en que la concentración plasmática se mantiene por arriba de la CIM en el intervalo interdosis"],
    "options": [
      "La efectividad de los antibióticos concentración y tiempo dependientes está dada por el tiempo en el que alcanzan la Cmax",
      "La efectividad de los antibióticos concentración dependientes está dada por el tiempo en el que se tarda en obtener la Cmax",
      "La efectividad de los antibióticos tiempo dependientes está dada por el tiempo en que la concentración plasmática se mantiene por arriba de la CIM en el intervalo interdosis",
      "La efectividad de los antibióticos tiempo dependientes está dada por el tiempo en el que la concentración plasmática se mantiene por arriba de la CIM en 24 horas"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 53,
    "question": "¿Cuál de los siguientes fármacos antiepilépticos presenta como principal mecanismo de acción la inhibición de canales de sodio dependientes de voltaje? ",
    "answer": ["Carbamazepina"],
    "options": [
      "Diazepam",
      "Gabapentina",
      "Levetiracetam",
      "Carbamazepina"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 54,
    "question": "¿Cuál de las siguientes afirmaciones justifica que diazepam y midazolam no sean utilizados como antiepilépticos en el tratamiento crónico de la epilepsia?",
    "answer": ["Se desarrolla tolerancia a sus efectos"],
    "options": [
      "Se desarrolla tolerancia a sus efectos",
      "Su espectro antiepiléptico es reducido",
      "Por vía oral no logran acceder al sistema nervioso central",
      "Tienen riesgo frecuente de depresión del centro respiratorio"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 55,
    "question": "¿Cuál de los siguientes corticoides inhalados presenta menor riesgo de efectos adversos considerando dosis equipotentes? ",
    "answer": ["Ciclesonida"],
    "options": [
      "Fluticasona",
      "Budesonida",
      "Ciclesonida",
      "Beclometasona"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 56,
    "question": "La interacción fármaco-receptor implica determinadas características propias del principio activo, que determinan una serie de efectos farmacológicos. Considerando el hipotético caso de un fármaco simpaticomimético con efectos terapéuticos cardíacos, el cual se desea modificar para lograr menor riesgo de efectos adversos de tipo A, manteniendo constate el resto de sus propiedades. ¿Cuál de las siguientes modificaciones consideraría más adecuada?",
    "answer": ["Aumento de la especificidad receptorial"],
    "options": [
      "Aumento de la especificidad receptorial",
      "Reducción de la selectividad receptorial",
      "Reducción de la constante de disociación",
      "Aumento de la actividad intrínseca de 0 a 1"
    ],
    "discipline": "Farmaco",
    "comment": "",
  },
  {
    "numb": 57,
    "question": "En relación con los mecanismos celulares de adaptación, en determinadas circunstancias puede generarse un aumento del tamaño celular. Dicho aumento corresponde a:",
    "answer": ["Hipertrofia"],
    "options": [
      "Atrofia",
      "Hipertrofia",
      "Hiperplasia",
      "Metaplasia"
    ],
    "discipline": "AnatoP",
    "comment": "",
  },
  {
    "numb": 58,
    "question": "En cuanto a las características que definen a la muerte celular programada (apoptosis), señale lo correcto:",
    "answer": ["La membrana celular mantiene su integridad"],
    "options": [
      "Existe agrandamiento celular",
      "El contenido celular sale de la célula",
      "La membrana celular mantiene su integridad",
      "La membrana celular sufre desnaturalización"
    ],
    "discipline": "AnatoP",
    "comment": "",
  },
  {
    "numb": 59,
    "question": "Se realiza una autopsia a un paciente de sexo masculino, 65 años, que fallece en CTI luego de varios días de encontrarse en estado grave. Una tomografía encefálica muestra imágenes compatibles con abscesos encefálicos. Indique cuál es el hallazgo histológico más probable:",
    "answer": ["Parénquima encefálico con focos de necrosis por licuefacción"],
    "options": [
      "Parénquima encefálico con focos de necrosis grasa",
      "Parénquima encefálico con focos de necrosis caseosa",
      "Parénquima encefálico con foco de necrosis de coagulación",
      "Parénquima encefálico con focos de necrosis por licuefacción"
    ],
    "discipline": "AnatoP",
    "comment": "",
  },
  {
    "numb": 60,
    "question": "Una de las alteraciones morfológicas celulares patológicas es la acumulación de pigmento. En algunas ocasiones se utiliza la técnica de azul de Prusia o Perls. Esta técnica se utiliza para detectar:",
    "answer": ["Hierro"],
    "options": [
      "Cobre",
      "Hierro",
      "Melanina",
      "Lipofuscina"
    ],
    "discipline": "AnatoP",
    "comment": "",
  }

// {
//numb 6,//  question "Your Question is Here",
//  answer "C[orrect answer of[ the question is here]",
//  options [
//     "Option 1",
//     "option 2",
//     "option 3",
//     "option 4"
//   ]
];