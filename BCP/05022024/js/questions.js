// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "El resultado de un antibiograma de Staphylococcus aureus es el siguiente: Resistencia a: penicilina, eritromicina y clindamicina (test D positivo). Sensible a: cefoxitina, gentamicina y trimetoprim-sulfametoxazol. Se trata de una cepa:",
    "answer": ["meticilino sensible con resistencia inducible a clindamicina"],
    "options": [
      "meticilino resistente con resistencia inducible a clindamicina",
      "meticilino sensible con resistencia inducible a clindamicina",
      "meticilino resistente con resistencia constitutiva a clindamicina",
      "meticilino sensible con resistencia constitutiva a clindamicina"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 2,
    "question": "¿Cuál es la infección connatal más frecuente que causa sordera neurosensorial?",
    "answer": ["Citomegalovirus congénito"],
    "options": [
      "VIH congénito",
      "Rubéola congénita",
      "Herpes virus congénito",
      "Citomegalovirus congénito",
      "Infección por Streptococcus del grupo B"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 3,
    "question": "¿Qué características espera encontrar en el líquido cefalorraquídeo de un paciente con una meningoencefalitis aguda por Neisseria meningitidis? ",
    "answer": ["Líquido turbio, leucocitos aumentados a predominio de PMN, glucosa descendida, y diplococos gram negativos en el estudio directo con tinción de Gram"],
    "options": [
      "Líquido turbio, leucocitos aumentados a predominio de PMN, glucosa descendida, y diplococos gram negativos en el estudio directo con tinción de Gram",
      "Líquido turbio, leucocitos aumentados a predominio de monocitos, glucosa aumentada, y diplococos gram positivos en el estudio directo con tinción de Gram",
      "Líquido claro, leucocitos aumentados a predominio de PMN, glucosa aumentada, y diplococos gram positivos en el estudio directo con tinción de Gram",
      "Líquido claro, leucocitos aumentados a predominio de monocitos, glucosa descendida y diplococos gram negativos en el estudio directo con tinción de Gram"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 4,
    "question": "En un paciente con infección tuberculosa latente usted espera encontrar:",
    "answer": ["Ausencia de síntomas, Rxtx normal, PPD reactivo"],
    "options": [
      "Ausencia de síntomas, Rxtx normal, PPD reactivo",
      "Síntomas sugestivos, Rxtx alterada y PPD reactivo",
      "Síntomas sugestivos, RxTx normal, PPD no reactivo", 
      "Ausencia de síntomas, RxTx alterada y PPD reactivo",
      "Síntomas sugestivos, RxTx alterada, PPD no reactivo"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 5,
    "question": "Paciente de sexo masculino, 32 años, que consulta por corrimiento purulento uretral. Con planteo de uretritis gonocóccica el médico indica ceftriaxona y azitromicina. ¿Por qué indicó un tratamiento antibiótico combinado?",
    "answer": ["Por la posibilidad de haber más de un agente etiológico involucrado, como Chlamydia trachomatis, dada la forma de transmisión"],
    "options": [
      "Debido a que Neisseria gonorrhoeae es un patógeno intracelular obligado",
      "Debido a los elevados niveles de resistencia de Neisseria gonorrhoeae en nuestro país",
      "Por la capacidad de Neisseria gonorrhoeae de formar comunidades microbianas como biofilms",
      "Por la posibilidad de haber más de un agente etiológico involucrado, como Chlamydia trachomatis, dada la forma de transmisión"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 6,
    "question": "Streptococcus pyogenes es el agente etiológico de la escarlatina. ¿Cuál de los siguientes factores de virulencia es el responsable del rash característico de esta enfermedad?",
    "answer": ["Toxina pirogénica"],
    "options": [
      "Proteína M",
      "Hialuronidasa",
      "Estreptolisina O",
      "Toxina pirogénica"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 7,
    "question": "¿Cuáles son los principales blancos de acción de las distintas opciones de la terapia triple antirretroviral que se pueden encontrar?",
    "answer": ["integrasa, transcriptasa reversa, proteasa"],
    "options": [
      "gp120, integrasa, proteasa",
      "p24, gp120, transcriptasa reversa",
      "p24, transcriptasa reversa, proteasa",
      "integrasa, transcriptasa reversa, proteasa"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 8,
    "question": "¿Qué marcadores porta un individuo con una infección resuelta por el virus de la hepatitis B (HBV)?",
    "answer": ["HBsAg no reactivo, anti HBsAg reactivo y anti HBcAg reactivo"],
    "options": [
      "HBsAg reactivo y anti HBcAg reactivo",
      "HBsAg no reactivo y antiHBcAg no reactivo",
      "HBsAg reactivo, anti HBsAg reactivo y anti HBcAg reactivo",
      "HBsAg no reactivo, anti HBsAg reactivo y anti HBcAg reactivo",
      "HBsAg no reactivo, anti HBsAg reactivo y anti HBcAg no reactivo"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 9,
    "question": "Escherichia coli enterotoxigénica (ETEC) es agente de diarrea aguda en niños de regiones pobres, y también de enfermedad esporádica o epidémica de origen alimentario. Esta bacteria, durante la infección, induce hipersecreción de agua y electrolitos a través de:",
    "answer": ["La producción en el intestino de enterotoxinas termolábil (LT) y termoestable (ST)"],
    "options": [
      "La producción en el intestino de proteína NSP4 con actividad enterotoxina",
      "La ingestión de enterotoxinas preformadas, termolábil (LT) y termoestable (ST)",
      "La producción en el intestino de enterotoxinas termolábil (LT) y termoestable (ST)",
      "La ingestión de bacterias portando intimina en su membrana externa, responsable de la actividad enterotóxica"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 10,
    "question": "Usted está asistiendo a una mujer de 24 años que consulta por disuria, fiebre y dolor lumbar. El resultado del urocultivo informa: desarrolla más de 100000 UFC/ml de Escherichia coli. Sensible a: cefuroxime, amoxicilina clavulánico, trimetoprim sulfametoxazol, nitrofurantoína, fosfomicina-trometamol. Resistente a: ciprofloxacina, ampicilina, cefradina. ¿Qué antibiótico elegiría para el tratamiento?",
    "answer": ["Cefuroxime"],
    "options": [
      "Cefradina",
      "Cefuroxime",
      "Ciprofloxacina",
      "Nitrofurantoina",
      "Fosfomicina-trometamol"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 11,
    "question": "Teniendo en cuenta el perfil de resistencia a betalactámicos de la cepa aislada del urocultivo en la pregunta anterior, ¿cuál es el mecanismo de resistencia a betalactámicos que presenta?",
    "answer": ["Betalactamasa de espectro ampliado"],
    "options": [
      "Nueva PBP 2a",
      "PBP en mosaico",
      "Cefalosporinasa de tipo AmpC",
      "Betalactamasa de espectro ampliado",
      "Betalactamasa de espectro extendido"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 12,
    "question": "¿Qué espera encontrar en el examen microscópico directo de una muestra de expectoración representativa del tracto respiratorio inferior obtenida de un paciente con neumonia por Streptococcus pneumoniae?",
    "answer": ["Abundantes células PMN y diplococos gram positivos"],
    "options": [
      "Abundantes células PMN y diplococos gram positivos",
      "Abundantes células PMN y diplococos gram negativos",
      "Abundantes células epiteliales, y diplococos gram positivos",
      "Abundantes células epiteliales y diplococos gram negativos",
      "Abundantes células epiteliales, distintas morfologías bacterianas con predominio de diplococos gram positivos."
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 13,
    "question": "El cultivo obtenido de un exudado de una lesión impetiginizada informa crecimiento de colonias beta hemolíticas. En el laboratorio realizan tinción de Gram observándose cocos gram positivos y realizan prueba de la catalasa visualizándose la formación de burbujas. ¿A cuál de las siguientes especies bacterianas es más probable que pertenezca este aislamiento?",
    "answer": ["Staphylococcus aureus"],
    "options": [
      "Staphylococcus aureus",
      "Streptococcus pyogenes",
      "Streptococcus agalactiae",
      "Streptococcus pneumoniae",
      "Staphylococcus saprophyticus"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 14,
    "question": "¿Qué clase de beta lactamasas pueden inhibirse con el uso de inhibidores derivados de beta lactámicos como ser el ácido clavulánico, el tazobactam y el sulbactam?",
    "answer": ["Las de clase A como las BLEA y las BLEE"],
    "options": [
      "Las de clase C como CMY-2",
      "Las de clase D como OXA-48",
      "Las de clase B como NDM-1 y VIM-2",
      "Las de clase A como las BLEA y las BLEE"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 15,
    "question": "¿Qué clase de Carbapenemasa presenta un test de sinergia positivo entre el EDTA y el meropenem?",
    "answer": ["Las de clase B como NDM-1 y VIM-2"],
    "options": [
      "Las de clase A como KPC",
      "Las de clase D como OXA-48",
      "Las de clase B como NDM-1 y VIM-2"
    ],
  "discipline": "Bacterio",
  "comment": "",
  },
  {
    "numb": 16,
    "question": "¿Cuál de los siguientes métodos diagnósticos se utiliza en el screening de enfermedad de Chagas en las embarazadas?",
    "answer": ["ELISA IgG"],
    "options": [
      "ELISA IgG",
      "Método de Strout",
      "Microhematocrito",
      "Xenodiagnóstico",
      "Inmunofluorescencia directa"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 17,
    "question": "¿Cómo adquiere el ser humano la infección por Ecchinococcus granulosus?",
    "answer": ["por ingestión de huevos eliminados en heces de perros parasitados"],
    "options": [
      "por ingestión de quistes presentes en carnes mal cocidas",
      "por consumo de metacercarias presentes en el berro silvestre",
      "por penetración transcutánea de larvas libres en el medio exterior",
      "por ingestión de huevos eliminados en heces de perros parasitados"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 18,
    "question": "¿Cómo se puede presentar clínicamente la infección por Fasciola hepatica en humanos?",
    "answer": ["Dolor abdominal y eosinofilia periférica"],
    "options": [
      "Oclusión intestinal",
      "Plaquetopenia y leucopenia",
      "Enfermedad inflamatoria pélvica",
      "Dolor abdominal y eosinofilia periférica"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 19,
    "question": "¿Cuál de las siguientes enfermedades es transmitida por el mosquito Aedes aegypti?",
    "answer": ["Fiebre amarilla"],
    "options": [
      "Paludismo",
      "Leishmaniosis",
      "Fiebre amarilla",
      "Enfermedad de Chagas"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 20,
    "question": "¿A qué corresponden los surcos acarinos en la infección por Sarcoptes scabiei?",
    "answer": ["A las lesiones producidas por la penetración de la hembra adulta en el estrato córneo de la piel"],
    "options": [
      "A las lesiones que derivan de las reacciones de hipersensibilidad",
      "A lesiones gruesas, adherentes y extensas, propias de la sarna Noruega",
      "A las lesiones producidas por la penetración de la hembra adulta en el estrato córneo de la piel",
      "A lesiones indirectas que se pueden observar en regiones extensoras del cuerpo en personas atópicas"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 21,
    "question": "¿Cuál es la principal forma de adquisición de las infecciones producidas por levaduras del género Candida?",
    "answer": ["Por vía endógena"],
    "options": [
      "Por vía exógena",
      "Por vía endógena",
      "Por inoculación traumática",
      "Por la inhalación de sus esporas"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 22,
    "question": "¿De cuál de los siguientes cuadros clínicos son agentes frecuentes las levaduras del género Malassezia?",
    "answer": ["Foliculitis"],
    "options": [
      "Foliculitis",
      "Vulvovaginitis",
      "Herpes circinado",
      "Eccema marginado de hebra"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 23,
    "question": "¿Cuál de las siguientes opciones indica una forma de transmisión de la toxoplasmosis por vía oral?",
    "answer": ["La ingesta de quistes tisulares de carnes de consumo humano escasamente cocidas"],
    "options": [
      "La ingesta de ooquistes tisulares de carnes de consumo humano escasamente cocidas",
      "La ingesta de quistes a partir de frutas y verduras contaminadas y mal lavadas para su consumo",
      "La ingesta de quistes tisulares de carnes de consumo humano escasamente cocidas"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 24,
    "question": "¿Cuál es la principal vía de transmisión de la enfermedad de Chagas en el Uruguay en la actualidad?",
    "answer": ["Vertical"],
    "options": [
      "Oral",
      "Vertical",
      "Vectorial",
      "Transfusional",
      "Por trasplante de órganos"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 25,
    "question": "¿Cuál es la manifestación clínica más frecuente en la reactivación de una toxoplasmosis crónica en pacientes inmunocomprometidos? ",
    "answer": ["Encefalopatía con focalidad neurológica"],
    "options": [
      "Pancarditis",
      "Anemia prolongada y pérdida de peso",
      "Encefalopatía con focalidad neurológica",
      "Visceromegalias acompañadas de episodios febriles"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 26,
    "question": "¿Cuál de los siguientes agentes es responsable de la miasis que se produce en lesiones descuidadas, malolientes o infectadas?",
    "answer": ["Cochliomyia hominivorax"],
    "options": [
      "Sarcoptes scabiei",
      "Dermatobia hominis",
      "Sarcopsylla penetrans",
      "Cochliomyia hominivorax"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 27,
    "question": "¿Qué espera observar en el estudio micológico directo de una esporotricosis?",
    "answer": ["Levaduras rodeadas por estructuras radiadas (clavas)"],
    "options": [
      "Cadena de levaduras formadas por gemación",
      "Filamentos de moho hialinos, tabicados y artrosporados",
      "Levaduras rodeadas por estructuras radiadas (clavas)",
      "Microconidios acrógenos dispuestos en forma de margarita"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 28,
    "question": "¿Cuál es uno de los mecanismos de acción patógena de los trofozoítos de Giardia lamblia?",
    "answer": ["La alteración de las vellosidades del intestino delgado"],
    "options": [
      "La ulceración de la mucosa intestinal",
      "La penetración, multiplicación y lisis de los enterocitos",
      "La alteración de las vellosidades del intestino delgado",
      "La inducción de la secreción intestinal mediada por neurotransmisores"
    ],
  "discipline": "Parasito",
  "comment": "",
  },
  {
    "numb": 29,
    "question": "¿Qué ocurre con el fotón incidente cuando existe interacción de la radiación con la materia a través del efecto fotoeléctrico?",
    "answer": ["deposita toda su energía para eyectar un electrón de una capa cercana al núcleo"],
    "options": [
      "dispersa parte de su energía y otra parte se transfiere a un electrón del medio",
      "deposita toda su energía para eyectar un electrón de una capa cercana al núcleo",
      "interactúa con el campo eléctrico del núcleo atómico y deposita toda su energía",
      "transfiere su energía a un electrón de la capa de valencia formando un radical libre"
    ],
  "discipline": "Biofisica",
  "comment": "",
  },
  {
    "numb": 30,
    "question": "¿Cuál de las siguientes alteraciones está asociada a un efecto estocástico de las radiaciones?",
    "answer": ["carcinogénesis"],
    "options": [
      "cataratas",
      "carcinogénesis",
      "displasia celular",
      "descamado de la piel",
      "esterilidad reversible"
    ],
  "discipline": "Biofisica",
  "comment": "",
  },
  {
    "numb": 31,
    "question": "En una curva de sobrevida celular en función de la dosis de radiación ¿qué significado tiene el parámetro dosis cuasiumbral?",
    "answer": ["representa la capacidad de reparación del las células"],
    "options": [
      "representa la capacidad de reparación del las células",
      "representa la frecuencia mutagénica de la población",
      "es la pendiente de la curva a altas dosis de radiación",
      "es la dosis a la cual sobrevive el 50% de la población"
    ],
  "discipline": "Biofisica",
  "comment": "",
  },
  {
    "numb": 32,
    "question": "En cuanto a la utilización de blindajes como método de radioprotección, ¿qué representa la capa hemireductora?",
    "answer": ["el espesor que disminuye la intensidad de fotones inicial a la mitad"],
    "options": [
      "la intensidad de radiación que incide inicialmente en el blindaje",
      "la intensidad de radiación atenuada luego de atravesar el blindaje",
      "el espesor que disminuye la intensidad de fotones inicial 10 veces",
      "el espesor que disminuye la intensidad de fotones inicial a la mitad"
    ],
  "discipline": "Biofisica",
  "comment": "",
  },
  {
    "numb": 33,
    "question": "¿Cuál de los siguientes parámetros es necesario para poder realizar diagnóstico de insuficiencia respiratoria?  ",
    "answer": ["Fracción inspirada de oxígeno"],
    "options": [
      "Sexo del paciente",
      "Fracción inspirada de oxígeno",
      "Concentración de hemoglobina",
      "Saturación de oxígeno de la hemoglobina"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 34,
    "question": "¿Cuál de los siguientes parámetros define a la insuficiencia respiratoria tipo 2?",
    "answer": ["El nivel de anhídrido carbónico arterial"],
    "options": [
      "La severidad de la hipoxemia",
      "La respuesta al test de hiperoxia",
      "El nivel de anhídrido carbónico arterial",
      "La concentración arterial de monóxido de carbono"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 35,
    "question": "Indique cuál de los siguientes hallazgos clínicos puede considerarse específico de los estados de shock:",
    "answer": ["Relleno capilar enlentecido"],
    "options": [
      "Taquicardia",
      "Frialdad periférica",
      "Hipotensión arterial",
      "Relleno capilar enlentecido"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 36,
    "question": "¿Cuál de las siguientes características permite diferenciar al shock séptico del shock cardiogénico?",
    "answer": ["Las resistencias vasculares sistémicas"],
    "options": [
      "El valor de lactato arterial",
      "La severidad de la hipotensión arterial",
      "Las resistencias vasculares sistémicas",
      "La presencia de disfunción orgánica múltiple"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 37,
    "question": "¿En cuál de los siguientes tipos de shock se puede encontrar una fase hiperdinámica y una hipodinámica?",
    "answer": ["Distributivo"],
    "options": [
      "Distributivo",
      "Obstructivo",
      "Cardiogénico",
      "Hipovolémico"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 38,
    "question": "En un paciente con fibrosis pulmonar, ¿qué alteración funcional espera encontrar?",
    "answer": ["Descenso de la complacencia pulmonar"],
    "options": [
      "Aumento del volumen residual",
      "Descenso de la complacencia pulmonar",
      "Aumento de la capacidad pulmonar total",
      "Descenso de la relación VEF1/CVF por debajo de 70%"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 39,
    "question": "¿Qué tipo de insuficiencia cardíaca tiene mejor pronóstico? ",
    "answer": ["Hipertensiva"],
    "options": [
      "Hipotensiva",
      "Normotensiva",
      "Hipertensiva"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 40,
    "question": "¿Cuál es la alteración determinante del síndrome hepatorenal?",
    "answer": ["Vasodilatación esplácnica"],
    "options": [
      "Daño túbulo intersticial",
      "Vasodilatación esplácnica",
      "Obstrucción al flujo urinario",
      "Aumento de amoniogénesis"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 41,
    "question": "¿Qué parámetro tiene utilidad para diferenciar la injuria renal aguda parenquimatosa de la prerenal?",
    "answer": ["Fracción excretada de sodio"],
    "options": [
      "Diuresis en 24h",
      "Clearance de creatinina",
      "Fracción excretada de sodio",
      "Gradiente trans tubular de potasio"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 42,
    "question": "¿Cuál es el principal rol de los factores de transcripción inducidos por hipoxia (HIF)?",
    "answer": ["Favorecer la supervivencia celular en situaciones de disminución del aporte de oxígeno"],
    "options": [
      "Favorecer la afinidad de la hemoglobina por el oxígeno",
      "Impedir la producción de eritropoyetina por parte del riñón",
      "Favorecer la supervivencia celular en situaciones de disminución del aporte de oxígeno",
      "Impedir el crecimiento de células tumorales en ambientes con bajo contenido de oxígeno"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 43,
    "question": "¿Cuál es el límite temporal para considerar una hiponatremia como crónica?",
    "answer": ["48 horas"],
    "options": [
      "48 horas",
      "72 horas",
      "7 días",
      "14 días"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 44,
    "question": "¿Cuál es el perfil del hiperaldosteronismo primario?",
    "answer": ["Hipertensión arterial, hipopotasemia y alcalosis metabólica"],
    "options": [
      "Hipertensión arterial, hipopotasemia y alcalosis metabólica",
      "Hipertensión arterial, hipopotasemia y acidosis metabólica",
      "Hipotensión arterial, hiperpotasemia y alcalosis metabólica",
      "Hipotensión arterial, hipopotasemia y acidosis metabólica",
      "Hipotensión arterial, hiperpotasemia y acidosis metabólica"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 45,
    "question": "En una acidosis metabólica, ¿Cuál es la respuesta adaptativa esperada?",
    "answer": ["Disminución de la PaCO2"],
    "options": [
      "Aumento de la PaCO2",
      "Disminución de la PaCO2",
      "Aumento del bicarbonato plasmático",
      "Disminución del bicarbonato plasmático"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 46,
    "question": "¿Cuál de las siguientes es causa de acidosis respiratoria?",
    "answer": ["Enfermedad pulmonar obstructiva crónica"],
    "options": [
      "Anemia",
      "Hiperventilación",
      "Trastorno de ansiedad",
      "Enfermedad pulmonar obstructiva crónica"
    ],
  "discipline": "Fisiopato",
  "comment": "",
  },
  {
    "numb": 47,
    "question": "Señale la afirmación correcta sobre los parámetros de absorción de un fármaco A administrado en dosis única por vía oral: ",
    "answer": ["El tiempo al pico de concentración máxima (t max) depende entre otras variables, de la velocidad de absorción."],
    "options": [
      "La biodisponibilidad es un parámetro independiente de la fisiología o patología del individuo.",
      "La velocidad de absorción del fármaco activo es independiente de la forma farmacéutica utilizada.",
      "El pico máximo de concentración plasmática (Cmax) depende de la vida media de eliminación del fármaco.",
      "El tiempo al pico de concentración máxima (t max) depende entre otras variables, de la velocidad de absorción."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 48,
    "question": "Señale la afirmación correcta respecto a la curva dosis-respuesta de fármacos agonistas y antagonistas:",
    "answer": ["El agonista parcial alcanza un efecto máximo menor al del agonista puro."],
    "options": [
      "El agonista puro tiene menor actividad intrínseca que el agonista parcial.",
      "El agonista parcial alcanza un efecto máximo menor al del agonista puro.",
      "El antagonista competitivo desplaza la curva del agonista puro hacia la izquierda y abajo.",
      "El agonista puro alcanza menor eficacia máxima en presencia del antagonista competitivo.",
      "El antagonista no competitivo desplaza la curva del agonista puro hacia la izquierda y arriba."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 49,
    "question": "¿Cuál de los siguientes mecanismos de acción se asocia con efectos farmacológicos simpaticomiméticos?",
    "answer": ["Bloqueo de la recaptación presináptica de noradrenalina."],
    "options": [
      "Bloqueo de la enzima dopamina beta-hidroxilasa.",
      "Activación de receptores alfa2 presinápticos centrales.",
      "Bloqueo de la recaptación presináptica de noradrenalina.",
      "Antagonismo competitivo de receptores alfa1 postsinápticos periféricos."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 50,
    "question": "¿Cuál de las siguientes es una posible reacción adversa mediada por efecto antimuscarínico de algunos antihistamínicos o psicofármacos?",
    "answer": ["Sequedad de mucosas"],
    "options": [
      "Broncoespasmo",
      "Diarrea osmótica",
      "Incontinencia urinaria",
      "Sequedad de mucosas",
      "Hipersecreción ácida gástrica."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 51,
    "question": "La inhibición selectiva sobre la ciclooxigenasa 2 de algunos antiinflamatorios no esteroideos como celecoxib se asocia con mayor riesgo epidemiológico de ciertos eventos adversos, respecto a otros antiinflamatorios no selectivos como ketoprofeno. ¿Cuál de los siguientes constituye un efecto adverso de dicho grupo farmacológico?",
    "answer": ["Infarto agudo de miocardio"],
    "options": [
      "Hemorragia digestiva",
      "Retención aguda de orina",
      "Inmunosupresión adquirida",
      "Infarto agudo de miocardio",
      "Insuficiencia corticosuprarrenal"
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 52,
    "question": "Señale la afirmación correcta respecto a los efectos farmacológicos de morfina:",
    "answer": ["Disminuye la sensación de dolor y también la vivencia desagradable del mismo"],
    "options": [
      "Disminuye la sensación de dolor y también la vivencia desagradable del mismo",
      "La intensidad de la acción disminuye si se asocia con un antiinflamatorio no esteroideo",
      "El efecto final es independiente del estado emocional previo de la persona que la recibe",
      "En individuos sin dolor carece de efecto sobre el nivel de conciencia y umbral convulsivo."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 53,
    "question": "¿Cuál de las siguientes reacciones adversas órgano-selectivas es la mayor limitante para el uso de antibióticos aminoglucósidos?",
    "answer": ["Ototoxicidad y nefrotoxicidad"],
    "options": [
      "Cardiotoxicidad e infertilidad",
      "Ototoxicidad y nefrotoxicidad",
      "Hepatotoxicidad y teratogenia",
      "Neuropatía periférica y flebitis"
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 54,
    "question": "¿Cuál es la razón por la cual claritromicina y azitromicina no son útiles en infecciones urinarias?",
    "answer": ["Las enterobacterias poseen resistencia intrínseca a estos antibióticos, al impedir su pasaje por la membrana externa"],
    "options": [
      "Su absorción por vía oral es escasa y lenta al ser moléculas muy polares que no logran atravesar bien las membranas",
      "Las enterobacterias poseen resistencia intrínseca a estos antibióticos, al impedir su pasaje por la membrana externa",
      "No logran concentraciones adecuadas en el parénquima renal por su escasa eliminación por filtración glomerular",
      "La resistencia adquirida de las enterobacterias es mayor al 30% debido a mutación de la ADN-girasa, el sitio blanco de acción de ambos antibióticos"
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 55,
    "question": "Señale la afirmación correcta sobre riesgos asociados al uso de anticonceptivos orales con estrógenos:",
    "answer": ["La posibilidad de trombosis venosa es mayor si la mujer es fumadora y tiene otros factores de riesgo de tromboembolia. "],
    "options": [
      "Los más modernos carecen de interacciones farmacológicas desfavorables con antibióticos o antiepilépticos.",
      "Se asocian con un mayor riesgo de hemorragia digestiva aguda",
      "razón por la cual se utilizan combinados con progestágenos.",
      "El riesgo de efectos adversos metabólicos sobre lípidos e hidratos de carbono es independiente de la dosis estrogénica usada.",
      "La posibilidad de trombosis venosa es mayor si la mujer es fumadora y tiene otros factores de riesgo de tromboembolia."
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 56,
    "question": "¿Cuál de las siguientes es una reacción adversa tipo A que puede observarse luego de una dosis única de prednisona 1 mg/kg por vía oral?",
    "answer": ["Hiperglucemia"],
    "options": [
      "Cataratas.",
      "Osteoporosis",
      "Hiperglucemia",
      "Candidiasis orofaríngea"
    ],
  "discipline": "Farmaco",
  "comment": "",
  },
  {
    "numb": 57,
    "question": "¿Cuál de las siguientes características de la observación microscópica es útil en el diagnóstico de la esteatosis hepática?",
    "answer": ["Observación de macro y/o micro vesículas con la técnica hematoxilina y eosina"],
    "options": [
      "Observación de macro y/o micro vesículas con la técnica hematoxilina y eosina",
      "Observación de vacuolas lipídicas eosinofílicas con la técnica hematoxilina y eosina",
      "Observación vacuolas de coloración turquesa con la técnica de Perls (azul de prusia)",
      "Observación de vesículas de coloración fucsia con la técnica de PAS (ácido peryódico de Shiff)"
    ],
  "discipline": "AnatoP",
  "comment": "",
  },
  {
    "numb": 58,
    "question": "¿Qué patrón de necrosis tisular puede observarse en la pancreatitis aguda?",
    "answer": ["Necrosis grasa"],
    "options": [
      "Necrosis grasa",
      "Necrosis caseosa",
      "Necrosis coagulativa",
      "Necrosis gangrenosa"
    ],
  "discipline": "AnatoP",
  "comment": "",
  },
  {
    "numb": 59,
    "question": "¿Cuál es el patrón morfológico de inflamación aguda que se observa en la apendicitis aguda?",
    "answer": ["Inflamación supurativa"],
    "options": [
      "Úlcera",
      "Inflamación serosa",
      "Inflamación fibrinosa",
      "Inflamación supurativa"
    ],
  "discipline": "AnatoP",
  "comment": "",
  },
  {
    "numb": 60,
    "question": "¿Cuál de las siguientes señales químicas activa a los macrófagos durante la inflamación crónica? ",
    "answer": ["IFN-gamma"],
    "options": [
      "ERO",
      "IL-10",
      "TGF-beta",
      "IFN-gamma"
    ],
  "discipline": "AnatoP",
  "comment": "",
  },

];
