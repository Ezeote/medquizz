// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "Se envía una muestra de orina de una paciente con disuria y polaquiuria para urocultivo.\nLa misma es sembrada en agar sangre y agar Mc Conkey lactosa. ¿Cómo se observarán los\ncultivos si se trata de una infección urinaria por E. coli?",
    "answer": "Crecimiento en agar sangre y Mc Conkey lactosa, colonias lactosa positivas"],
    "options": [
      "Crecimiento solo en agar sangre",
      "Crecimiento solo en Mc Conkey lactosa, colonias lactosa positivas",
      "Crecimiento solo en Mc Conkey lactosa, colonias lactosa negativas",
      "Crecimiento en agar sangre y Mc Conkey lactosa, colonias lactosa positivas",
      "Crecimiento en agar sangre y Mc Conkey lactosa, olonias lactosa negativas"
    ]
  },
  {
    "numb": 2,
    "question": "¿Cuál de los siguientes antibióticos puede ser utilizado para el tratamiento de una cistitis\naguda pero no de una pielonefritis?",
    "answer": "Fosfomicina trometamol",
    "options": [
      "Ciprofloxacina",
      "Cefuroxima axetil",
      "Amoxicilina clavulánico",
      "Fosfomicina trometamol"
    ]
  },
  {
    "numb": 3,
    "question": "Shigella spp. llega a través de células M a la superficie basolateral del epitelio intestinal e\ninvade las células epiteliales. ¿De qué depende esta invasión?",
    "answer": "Del sistema de secreción de tipo III y de una GTPasa que regula el citoesqueleto de actina",
    "options": [
      "Del sistema de secreción de tipo III y de una GTPasa que regula el citoesqueleto de actina",
      "De la producción de toxinas que producen poros en la membrana celular del enterocito",
      "De 2 flagelos polares cuya expresión es un importante determinante de Patogenicidad"
    ]
  },
  {
    "numb": 4,
    "question": "¿Cuál de los siguientes antivirales puede indicarse para el tratamiento de la infección por\ncitomegalovirus?",
    "answer": "Ganciclovir",
    "options": [
      "Aciclovir",
      "Ganciclovir",
      "Lamivudina",
      "Oseltamivir",
      "Dolutegravir"
    ]
  },
  {
    "numb": 5,
    "question": "Con respecto a los métodos diagnósticos de sífilis. ¿Cuál de los siguientes métodos\npermite evaluar la eficacia del tratamiento antibiótico indicado?\n",
    "answer": "Pruebas no treponémicas, que buscan Ac contra antígenos de los tejidos dañados",
    "options": [
      "Visualización de T. pallidum en microscopio de campo oscuro",
      "Pruebas treponémicas, que buscan Ac anti Treponema pallidum",
      "Pruebas no treponémicas, que buscan Ac contra antígenos de los tejidos dañados",
      "Visualización del daño tisular mediante microscopía de inmunofluorescencia directa"
    ]
  },
  {
    "numb": 6,
    "question": "Las proteínas E6 y E7 del virus del Papilloma Humano (HPV) se unen a:",
    "answer": "proteínas celulares supresoras de tumores",
    "options": [
      "proteínas celulares supresoras de tumores",
      "ADN cromosómico de las células del epitelio uterino",
      "proteínas de la superficie celular",
      "ADN mitocondrial de la célula epitelial del cuello uterino"
    ]
  },
  {
    "numb": 7,
    "question": "El resultado serológico de un paciente con hepatitis es el siguiente:\nAntígeno de superficie positivo (HBsAg+)\nAnticuerpo anti core (Ac anti HBc) IgM positivo, IgG negativo\nAnticuerpo anti-antígeno de superficie negativo (Ac anti HBs -).\nAl interpretar los marcadores serológicos podemos decir que el paciente:",
    "answer": "tiene una hepatitis B aguda",
    "options": [
      "tiene una hepatitis B aguda",
      "tuvo una infección por hepatitis B",
      "tiene una hepatitis B crónica",
      "fue vacunado contra hepatitis B"
    ]
  },
  {
    "numb": 8,
    "question": "¿Cómo deben obtenerse las muestras de hemocultivo en un paciente en el que se va a\niniciar de inmediato un tratamiento antibiótico?",
    "answer": "Tomar dos muestras pareadas en simultáneo de diferentes sitios de venopunción previo al inicio del tratamiento",
    "options": [
      "Tomar dos muestras pareadas en simultáneo de diferentes sitios de venopunción previo al inicio del tratamiento",
      "Tomar dos muestras pareadas en simultáneo del mismo sitio de venopunción previo al inicio del tratamientoTomar una muestra previo al inicio del tratamiento y la siguiente en el valle de concentración del antibiótico",
      "Tomar una muestra previo al inicio del tratamiento y la siguiente 60 minutos más tarde de la primer dosis de antibiótico"
    ]
  },
  {
    "numb": 9,
    "question": "Los fármacos de elección para el tratamiento de la enfermedad meningocóccica invasiva\nson las cefalosporinas de tercera generación. ¿cuál es el principal mecanismo de\nresistencia a dicho grupo de antibióticos en aislamientos de N. meningitidis en nuestro\npaís?",
    "answer": "Presencia de proteínas de tipo PBP en mosaico",
    "options": [
      "Producción de betalactamasas de espectro extendido",
      "Alteraciones de permeabilidad de membrana externa",
      "Presencia de proteínas de tipo PBP en mosaico",
      "Mecanismos de enmascaramiento del sitio blanco"
    ]
  },
  {
    "numb": 10,
    "question": "El punto de corte para la concentración inhibitoria mínima a penicilina en Streptococcus\npneumoniae es mayor para neumonia que para meningitis ¿A qué se debe esto?",
    "answer": "A que la penicilina alcanza mayores concentraciones en pulmón que en LCR",
    "options": [
      "A que la vía de administración para tratar neumonía y meningitis es distinta",
      "A que la penicilina alcanza mayores concentraciones en pulmón que en LCR",
      "A que las cepas que causan meningitis tienen más mecanismos de resistencia",
      "A que la neumonia es causada por un inóculo bacteriano mayor que la meningitis"
    ]
  },
  {
    "numb": 11,
    "question": "La enfermedad tuberculosa es causada por especies del grupo Mycobacterium\ntuberculosis complex. ¿Cuál de las siguientes estructuras es característica de la pared\ncelular de estas bacterias?",
    "answer": "Ácidos micólicos",
    "options": [
      "Peptidoglicano",
      "Ácidos micólicos",
      "Ácidos teicoicos",
      "Lipopolisacáridos",
      "Cápsula polisacarídica"
    ]
  },
  {
    "numb": 12,
    "question": "¿Cómo ingresa la partícula viral de influenza a la célula?\n",
    "answer": "Mediante endocitosis mediada por receptor y posterior fusión de la envoltura viral con la membrana de la vesícula endosomal a nivel intracelular",
    "options": [
      "Mediante fusión de la envoltura viral con la membrana celular a nivel de la superficie celular",
      "Mediante endocitosis mediada por receptor y posterior degradación de la vesícula y liberación del genoma",
      "Mediante endocitosis mediada por receptor y posterior fusión de la envoltura viral con la membrana de la vesícula endosomal a nivel intracelular"
    ]
  },
  {
    "numb": 13,
    "question": "Para el diagnóstico etiológico de una bronquiolitis en un niño de 1 año que consulta en\nservicio de emergencia ¿Qué muestra elegiría para realizar el diagnóstico mediante\nmétodos genéticos o inmunocromatográficos?",
    "answer": "",
    "options": [
      "Expectoración",
      "Aspirado nasofaríngeo",
      "Lavado broncoalveolar"
    ]
  },
  {
    "numb": 14,
    "question": "¿Qué detectan los test para VIH basados en enzimoinmunoanálisis (EIA) de 4ta\ngeneración?",
    "answer": "Anticuerpos anti-VIH y antígeno p24",
    "options": [
      "Ácido nucleico viral y antígeno gp41",
      "Anticuerpos anti-VIH y antígeno gp41",
      "Anticuerpos anti-VIH y antígeno p24",
      "Ácido nucleico viral y antígeno p24",
      "Anticuerpos anti-VIH y ácido nucleico viral"
    ]
  },
  {
    "numb": 15,
    "question": "¿Cuál es el mecanismo implicado en la resistencia a beta-lactámicos en Mycoplasma\npneumoniae?",
    "answer": "Resistencia natural, dado que no sintetizan peptidoglicano",
    "options": [
      "Resistencia adquirida, ya que producen beta-lactamasas",
      "Resistencia adquirida, ya que producen PBPs en mosaico",
      "Resistencia natural, dado que no sintetizan peptidoglicano",
      "Resistencia natural, dada la ausencia de porinas en la superficie celular"
    ]
  },
  {
    "numb": 16,
    "question": "¿Cuál de las siguientes parasitosis es emergente en nuestro país?",
    "answer": "Leishmaniosis",
    "options": [
      "Fasciolosis",
      "Ascaridiosis",
      "Leishmaniosis",
      "Toxoplasmosis"
    ]
  },
  {
    "numb": 17,
    "question": "¿Cuál de las siguientes parasitosis se transmite por el suelo?",
    "answer": "Hymenolepiasis",
    "options": [
      "Teniasis",
      "Giardiasis",
      "Echinococosis",
      "Hymenolepiasis"
    ]
  },
  {
    "numb": 18,
    "question": "¿Cuál de los siguientes exámenes de laboratorio solicitaría para diagnosticar una\nCriptosporidiosis?",
    "answer": "Tinción de Kinyoun",
    "options": [
      "Tinción de Gram",
      "Tinción de Giemsa",
      "Tinción de Kinyoun",
      "Inmunofluorescencia indirecta"
    ]
  },
  {
    "numb": 19,
    "question": "¿Cuál de los siguientes agentes de parasitosis intestinales es el más frecuente en\npoblación pediátrica en nuestro país?",
    "answer": "Enterobius vermicularis",
    "options": [
      "Giardia lamblia",
      "Trichuris trichiura",
      "Ascaris lumbricoides",
      "Enterobius vermicularis"
    ]
  },
  {
    "numb": 20,
    "question": "¿Cuál de los siguientes mecanismos de acción patógena es propio de los dermatofitos?",
    "answer": "Queratinolisis",
    "options": [
      "Lipolisis",
      "Trombosis",
      "Queratinolisis",
      "Angio-invasión"
    ]
  },
  {
    "numb": 21,
    "question": "¿Cuál de los siguientes fármacos se utiliza en el tratamiento de la oxiurosis?",
    "answer": "Mebendazol",
    "options": [
      "Mebendazol",
      "Metronidazol",
      "Nitaxozanida",
      "Praziquantel"
    ]
  },
  {
    "numb": 22,
    "question": "¿Cómo se realiza el diagnóstico de las infecciones producidas por Enterobius\nvermicularis?",
    "answer": "Realizando el método de Graham",
    "options": [
      "Realizando serología",
      "Realizando un coproparasitario",
      "Realizando el método de Graham",
      "Realizando el método de Hagara Mori"
    ]
  },
  {
    "numb": 23,
    "question": "¿Cuál de los siguientes factores favorece la proliferación de Trichomonas vaginalis en el humano?",
    "answer": "Alcalinización del pH de la vagina",
    "options": [
      "Alcalinización del pH de la vagina",
      "Proliferación de Lactobacillus spp en vagina",
      "Producción de estrógenos en el epitelio cervical",
      "Bajos títulos de IgA en mucosa de epitelio cervical"
    ]
  },
  {
    "numb": 24,
    "question": "Paciente procedente de Canelones con enfermedad renal crónica en diálisis que recibirá\nun trasplante. Serología para Enfermedad de Chagas IgG e IgM negativas. Donante con\nIgM negativo e IgG reactivo. De acuerdo a los datos brindados ¿Cuál de los siguientes enunciados es correcto?",
    "answer": "El paciente presenta riesgo de adquisición de la enfermedad de Chagas derivada del trasplante",
    "options": [
      "El paciente presenta riesgo de adquisición de la enfermedad de Chagas derivada del trasplante",
      "El paciente presenta riesgo de reactivación de una enfermedad de Chagas crónica dado que necesita recibir inmunosupresores por el trasplante",
      "El paciente tiene riesgo de adquirir enfermedad de Chagas dado que en Canelones se mantiene la transmisión vectorial",
      "El paciente presenta riesgo de adquirir enfermedad de Chagas dado que el sangrado intraoperatorio puede requerir de transfusión de sangre total"
    ]
  },
  {
    "numb": 25,
    "question": "¿Cuál de las siguientes es una enfermedad parasitaria transmitida por alimentos?",
    "answer": "Teniasis",
    "options": [
      "Teniasis",
      "Paludismo",
      "Ascaridiasis",
      "Leishmaniosis"
    ]
  },
  {
    "numb": 26,
    "question": "¿A qué se deben en las encefalitis por reactivaciones en pacientes infectados\ncrónicamente por Toxoplasma gondii?",
    "answer": "A una reactivación de la forma parasitaria bradizoíto",
    "options": [
      "A la lisis celular por la forma parasitaria merozoito",
      "A una reactivación de la forma parasitaria bradizoíto",
      "A una reactivación de la forma parasitaria taquizoíto",
      "A la lisis celular por la forma parasitaria esporozoito"
    ]
  },
  {
    "numb": 27,
    "question": "¿Qué género de mosquito es el principal vector de la malaria?",
    "answer": "Anopheles",
    "options": [
      "Culex",
      "Aedes",
      "Lutzomyia",
      "Anopheles"
    ]
  },
  {
    "numb": 28,
    "question": "¿En el diagnóstico parasitológico directo de un extendido de médula ósea de un paciente\ninfectado con Leishmania infantum que tipo de estructuras espera observar?",
    "answer": "Amastigotas",
    "options": [
      "Amastigotas",
      "Promastigotas",
      "Epimastigotas",
      "Tripomastigotas"
    ]
  },
  {
    "numb": 29,
    "question": "La reparación del ADN por recombinación homóloga se caracteriza por:",
    "answer": "actuar en etapa post replicativa",
    "options": [
      "poseer una alta tasa de error",
      "actuar en etapa post replicativa",
      "reparar las roturas simples de cadena",
      "unir los extremos sin importar las mutaciones"
    ]
  },
  {
    "numb": 30,
    "question": "La formación de imágenes médicas mediante la utilización de Rayos X para diagnóstico,\nse basa fundamentalmente en:",
    "answer": "efecto fotoeléctrico",
    "options": [
      "efecto Compton",
      "colisión inelástica",
      "efecto fotoeléctrico",
      "formación de pares"
    ]
  },
  {
    "numb": 31,
    "question": "La ecografía es un método imagenológico que se basa en:",
    "answer": "la estimulación del tejido con energía acústica",
    "options": [
      "la estimulación del tejido con energía acústica",
      "la estimulación del tejido con muy baja dosis de rayos x",
      "el efecto Compton independientemente del voltaje aplicado",
      "el efecto fotoeléctrico independientemente del voltaje aplicado"
    ]
  },
  {
    "numb": 32,
    "question": "¿Cuál de las siguientes medidas corresponde tomar para la radioprotección del personal\nexpuesto frente a un paciente que recibe un tratamiento para un cáncer de tiroides con Iodo 131 (I-131 radioactivo)?",
    "answer": "El paciente debe internarse aislado y se requiere tomar precauciones",
    "options": [
      "El paciente debe internarse aislado y se requiere tomar precauciones",
      "El paciente debe internarse bajo aislamiento respiratorio y aplican las medidas de precaución aéreas ya que la trasmisión ocurre a distancia por esta vía",
      "El paciente puede internarse en sala general y aplican las medidas de precaución estándar ya que el riesgo de trasmisión es muy bajo luego de finalizar la terapia"
    ]
  },
  {
    "numb": 33,
    "question": "¿Cuál de los siguientes es un efecto farmacológico extrabronquial de teofilina, útil en el\ntratamiento del asma?",
    "answer": "Aumento de la contractilidad del diafragma",
    "options": [
      "Sedación y ansiolisis",
      "Disminución del inotropismo cardíaco",
      "Aumento de la contractilidad del diafragma",
      "Inhibición del centro respiratorio a nivel bulbar"
    ]
  },
  {
    "numb": 34,
    "question": "Varios de los fármacos antiepilépticos pueden utilizarse también para el tratamiento de\notras situaciones clínicas. Señale la afirmación correcta:",
    "answer": "Carbamazepina disminuye el dolor crónico por neuralgia del trigémino",
    "options": [
      "Fenobarbital es útil para prevenir la hiperglucemia secundaria al uso de glucocorticoides",
      "Valproato de sodio puede revertir la hiponatremia por intoxicación alcohólica",
      "Carbamazepina disminuye el dolor crónico por neuralgia del trigémino",
      "Topiramato es una alternativa útil para tratar la uretritis gonocóccica",
      "Pregabalina antagoniza el efecto ansiolítico de las benzodiazepinas"
    ]
  },
  {
    "numb": 35,
    "question": "¿Cuál de los siguientes glucocorticoides tiene mayor potencia de acción antiinflamatoria y\nmenor potencia de acción mineralocorticoide que los demás?",
    "answer": "Dexametasona",
    "options": [
      "Prednisona",
      "Prednisolona",
      "Hidrocortisona",
      "Dexametasona",
      "Fludrocortisona."
    ]
  },
  {
    "numb": 36,
    "question": "Señale cuál es el mecanismo farmacocinético subyacente a la hepatotoxicidad grave\nasociada a la intoxicación aguda por paracetamol: ",
    "answer": "Saturación de la conjugación con glutatión del metabolito tóxico",
    "options": [
      "Saturación del efecto de primer paso a nivel entérico y hepático",
      "Saturación de la conjugación con glutatión del metabolito tóxico",
      "Saturación de la secreción tubular renal por excesiva filtración glomerular",
      "Inhibición de la reabsorción tubular distal renal y acumulación plasmática",
      "Inhibición de la síntesis de prostaglandinas protectoras de los hepatocitos"
    ]
  },
  {
    "numb": 37,
    "question": "¿Cuál de los siguientes fármacos puede producir reacciones adversas cardiovasculares\n(por ejemplo, arritmias ventriculares) y digestivas (por ejemplo, estreñimiento, boca seca) porque posee acción antagonista sobre receptores muscarínicos a dosis\nterapéuticas?",
    "answer": "Clorfeniramina",
    "options": [
      "Bisoprolol",
      "Alprazolam",
      "Mebendazole",
      "Hidrocortisona",
      "Clorfeniramina"
    ]
  },
  {
    "numb": 38,
    "question": "Señale la afirmación correcta sobre la selectividad de los antagonistas betaadrenérgicos:\n",
    "answer": "Metoprolol es más selectivo sobre receptores beta1 que propranolol.",
    "options": [
      "Propranolol es más selectivo sobre los receptores beta2 que beta1.",
      "Metoprolol es más selectivo sobre receptores beta1 que propranolol.",
      "Carvedilol tiene mayor selectividad por los receptores beta1 que bisoprolol.",
      "Atenolol carece de selectividad sobre alguno de los subtipos de receptores beta."
    ]
  },
  {
    "numb": 39,
    "question": "¿Cuál de las siguientes es una reacción adversa frecuente y leve que debe informarse a\nuna paciente joven con cistitis aguda a la que se prescribe nitrofurantoína 100 mg cada 6 horas por 5 días, para promover su adecuada adherencia terapéutica?",
    "answer": "Orina hipercoloreada.",
    "options": [
      "Visión borrosa.",
      "Broncoespasmo.",
      "Hipotensión ortostática.",
      "Orina hipercoloreada.",
      "Coloración amarillenta de piel y mucosas."
    ]
  },
  {
    "numb": 40,
    "question": "Señale la afirmación correcta sobre alfametildopa:",
    "answer": "Es un simpaticolítico de acción central agonista de receptores alfa2 adrenérgicos postsinápticos, útil para el tratamiento de estados hipertensivos del embarazo.",
    "options": [
      "Es un betabloqueante de tercera generación porque asocia acción antagonista beta 1 adrenérgica y acción antagonista alfa 1 adrenérgica.",
      "Es un broncodilatador del grupo de las metilxantinas con acción estimulante del sistema parasimpático periférico y de la contracción del diafragma.",
      "Es un antagonista muscarínico de acción central selectivo de receptores M2 postsinápticos, útil para el tratamiento crónico de ciertos tipos de epilepsia generalizada.",
      "Es un simpaticolítico de acción central agonista de receptores alfa2 adrenérgicos postsinápticos, útil para el tratamiento de estados hipertensivos del embarazo."
    ]
  },
  {
    "numb": 41,
    "question": "Marque la afirmación correcta respecto a la correlación entre mecanismo de acción de los antiinflamatorios no esteroideos y riesgo de reacciones adversas:\n",
    "answer": "La inhibición de producción de tromboxano A2 por bloqueo de la ciclooxigenasa 1 explica el riesgo de sangrado vinculado al uso del ácido acetilsalicílico.",
    "options": [
      "La mayor selectividad de ketoprofeno por la isoforma 2 de la ciclooxigenasa determina su muy bajo riesgo de hemorragia digestiva.",
      "La mayor selectividad de celecoxib por la isoforma 1 de la ciclooxigenasa explica su escaso o nulo riesgo de eventos cardiovasculares graves.",
      "La inhibición de producción de tromboxano A2 por bloqueo de la ciclooxigenasa 1 explica el riesgo de sangrado vinculado al uso del ácido acetilsalicílico.",
      "La elevada selectividad de paracetamol por la ciclooxigenasa tipo 2 en sitios con elevada concentración de peróxidos explica su bajo riesgo de producir insuficiencia renal."
    ]
  },
  {
    "numb": 42,
    "question": "¿Cuál de los siguientes es una reacción adversa potencialmente grave que puede\nproducirse si se administra rápidamente difenilhidantoína (fenitoína) por vía intravenosa durante el tratamiento del estado de mal convulsivo?",
    "answer": "Arritmias cardíacas con hipotensión",
    "options": [
      "Arritmias cardíacas con hipotensión",
      "Diarrea osmótica con deshidratación",
      "Sequedad extrema de piel y mucosas",
      "Edema pulmonar agudo por retención hidrosalina",
      "Broncoespasmo severo con poca respuesta a salbutamol"
    ]
  },
  {
    "numb": 43,
    "question": "En la hipertensión arterial, ¿Cuál es el efecto que tiene la disfunción endotelial sobre el músculo liso arterial?",
    "answer": "Efecto vasoconstrictor y proliferativo",
    "options": [
      "Efecto vasoconstrictor y proliferativo",
      "Efecto vasoconstrictor y anti-proliferativo",
      "Efecto vasodilatador y proliferativo",
      "Efecto vasodilatador y anti-proliferativo"
    ]
  },
  {
    "numb": 44,
    "question": "¿Cuál de los siguientes mecanismos explica que las bacteriemias sean frecuentes en la\ninsuficiencia hepatocítica severa?",
    "answer": "Función defectuosa de las células de Kupffer.",
    "options": [
      "Función defectuosa de las células de Kupffer.",
      "Disminución en el número de linfocitos T autorreactivos.",
      "Disminución de la permeabilidad de la mucosa intestinal."
    ]
  },
  {
    "numb": 45,
    "question": "En la hipertensión portal se produce un aumento del gradiente de presión entre la vena porta y la vena cava a niveles mayores de:\n",
    "answer": "5 mm Hg.",
    "options": [
      "2 mm Hg.",
      "3 mm Hg.",
      "4 mm Hg.",
      "5 mm Hg."
    ]
  },
  {
    "numb": 46,
    "question": "En un paciente que presenta pérdida de la autorregulación cerebral, ¿qué espera que\nocurra ante un descenso de la presión arterial media?",
    "answer": "Descenso del flujo sanguíneo cerebral",
    "options": [
      "Vasodilatación cerebral",
      "Aumento de la presión intra craneana",
      "Descenso del flujo sanguíneo cerebral",
      "Aumento de la presión de perfusión cerebral"
    ]
  },
  {
    "numb": 47,
    "question": "¿Cuál de los siguientes cambios determina un aumento de la presión intra craneana?",
    "answer": "Descenso de la natremia",
    "options": [
      "Descenso de la PaCO2",
      "Descenso de la natremia",
      "Descenso del retorno venoso cerebral",
      "Descenso del volumen de líquido cefalorraquídeo"
    ]
  },
  {
    "numb": 48,
    "question": "En el estudio de un paciente con patología pulmonar, presenta una relación entre\nvolumen espirado en el primer segundo / capacidad vital forzada (VEF1/CVF) aumentada y capacidad vital descendida. ¿A qué patrón espirométrico corresponde?\n",
    "answer": "Patrón restrictivo",
    "options": [
      "Patrón restrictivo",
      "Patrón obstructivo",
      "Patrón de hiperinsuflación pulmonar"
    ]
  },
  {
    "numb": 49,
    "question": "En una situación de déficit de surfactante pulmonar. ¿Qué cambios espera encontrar en\nla mecánica del sistema respiratorio?",
    "answer": "Descenso de la complacencia estática",
    "options": [
      "Menor tensión superficial alveolar",
      "Descenso de la complacencia estática",
      "Aumento de la capacidad pulmonar total",
      "Descenso de la resistencia de via aérea"
    ]
  },
  {
    "numb": 50,
    "question": "En un paciente con diarrea profusa y deshidratación severa se constata natremia 129\nmEq/L. ¿Cuál es el mecanismo fisiopatológico más probable de esta hiponatremia? ",
    "answer": "Estímulo no osmótico de la arginina vasopresina",
    "options": [
      "Estímulo del sistema nervioso simpático",
      "Estímulo osmótico de la arginina vasopresina",
      "Estímulo no osmótico de la arginina vasopresina",
      "Estímulo del sistema renina angiotensina aldosterona"
    ]
  },
  {
    "numb": 51,
    "question": "¿Cuál de las siguientes situaciones determina un movimiento de potasio desde el líquido extracelular al intracelular favoreciendo la disminución del potasio plasmático?",
    "answer": "Alcalosis metabólica",
    "options": [
      "Hiperglicemia",
      "Alcalosis metabólica",
      "Acidosis metabólica",
      "Tratamiento con diuréticos"
    ]
  },
  {
    "numb": 52,
    "question": "¿Cuál es el trastorno ácido base más frecuente observado en los episodios de diarrea?",
    "answer": "Acidosis metabólica con agujero aniónico normal",
    "options": [
      "Alcalosis metabólica cloro sensible",
      "Alcalosis metabólica cloro resistente",
      "Acidosis metabólica con agujero aniónico normal",
      "Acidosis metabólica con agujero aniónico aumentado"
    ]
  },
  {
    "numb": 53,
    "question": "¿Cuáles de los siguientes fenómenos podemos identificar durante la fase sintomática de la hipertensión arterial pulmonar? AMBIGUA a y c",
    "answer": "Disfunción sistólica inicial por fibrosis miocárdica del ventrículo derecho",
    "options": [
      "Disfunción sistólica inicial por fibrosis miocárdica del ventrículo derecho",
      "Disminución de la tensión parietal por dilatación del ventrículo derecho",
      "Incremento progresivo del espacio muerto fisiológico",
      "Aumento de la precarga del ventrículo izquierdo"
    ]
  },
  {
    "numb": 54,
    "question": "¿Cuál de las siguientes situaciones es una consecuencia de la acidosis respiratoria?",
    "answer": "Vasodilatación sistémica",
    "options": [
      "Vasodilatación sistémica",
      "Hipertensión arterial sistémica",
      "Aumento de la contractilidad miocárdica",
      "Disminución del aporte de oxígeno a los tejidos"
    ]
  },
  {
    "numb": 55,
    "question": "¿Cuál es el principal rol de los factores de transcripción inducidos por hipoxia (HIF)?",
    "answer": "Favorecer la supervivencia celular en situaciones de disminución del aporte de oxígeno",
    "options": [
      "Favorecer la afinidad de la hemoglobina por el oxígeno",
      "Impedir la producción de eritropoyetina por parte del riñón",
      "Favorecer la supervivencia celular en situaciones de disminución del aporte de oxígeno",
      "Impedir el crecimiento de células tumorales en ambientes con bajo contenido de oxígeno"
    ]
  },
  {
    "numb": 56,
    "question": "¿Cuál de las siguientes situaciones patológicas puede llevar a una disminución de la\ndisponibilidad de oxígeno?",
    "answer": "Intoxicación por monóxido de carbono",
    "options": [
      "Poliglobulia",
      "Aumento del índice cardíaco",
      "Aumento del impulso respiratorio",
      "Intoxicación por monóxido de carbono"
    ]
  },
  {
    "numb": 57,
    "question": "¿Cuál de los siguientes fenómenos ocurre en la inflamación aguda?",
    "answer": "Reclutamiento de neutrófilos",
    "options": [
      "Angiogénesis",
      "Proceso de fibrosis",
      "Infiltrado mononuclear",
      "Reclutamiento de neutrófilos"
    ]
  },
  {
    "numb": 58,
    "question": "¿Cuál de las siguientes características se corresponde con los procesos que ocurren durante la formación de una cicatriz?",
    "answer": "La angiogenia es un evento fundamental",
    "options": [
      "La angiogenia es un evento fundamental.",
      "La migración de neutrófilos es un evento esencial.",
      "La densidad de colágeno disminuye con el tiempo.",
      "Es un proceso aislado de la respuesta inflamatoria."
    ]
  },
  {
    "numb": 59,
    "question": "¿Cuál de las siguientes alteraciones ocurre en la muerte celular por apoptosis?",
    "answer": "Fragmentación celular",
    "options": [
      "Inflamación adyacente",
      "Fragmentación celular",
      "Aumento del tamaño celular",
      "Rotura de la membrana plasmática"
    ]
  },
  {
    "numb": 60,
    "question": "¿Cuál es la principal acción inflamatoria del Tromboxano A2 (Tx A2)?\n",
    "answer": "Vasoconstricción",
    "options": [
      "Quimiotaxis",
      "Vasodilatación",
      "Vasoconstricción",
      "Aumento de la permeabilidad vascular"
    ]
  }
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
