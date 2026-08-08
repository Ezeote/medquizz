let questions = [
    {
        "info_quest": "3er Parcial 2024",
        "numb": 1,
        "question": "Un hombre de 72 años con antecedentes de cardiopatía isquémica es ingresado por insuficiencia cardíaca aguda con edema periférico, disnea y ortopnea. <br> De la paraclínica inicial Creatinina sérica: 2.8 mg/dL (previa conocida: 1.2 mg/dL). <br> Se inicia tratamiento con diuréticos intravenosos y soporte inotrópico, y la creatinina a los 3 días del ingreso es de 1.3 mg/dl. <br> ¿Qué tipo de injuria renal aguda presentó el paciente?",
        "answer": ["Pre-renal"],
        "options": [
            "Pre-renal",
            "Post-renal",
            "Rarenquimatosa de etiología isquémica"
        ],
        "discipline": "Fisiopato",
        "comment": "La rápida reversibilidad de la falla renal (normalización de la creatinina a sus valores basales en pocos días) al optimizar el gasto cardíaco y la perfusión renal con diuréticos e inotrópicos confirma un origen funcional/prerrenal (síndrome cardiorrenal tipo 1), sin daño parenquimatoso establecido."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 2,
        "question": "¿Cuál de los siguientes fármacos puede agravar la injuria renal aguda isquémica por hipovolemia?",
        "answer": ["Inhibidores de la enzima convertidora de angiotensina"],
        "options": [
            "Antagonistas de los canales de calcio",
            "Antagonistas de los receptores beta-adrenérgicos",
            "Inhibidores de la enzima convertidora de angiotensina"
        ],
        "discipline": "Fisiopato",
        "comment": "Los IECA bloquean la síntesis de angiotensina II, aboliendo la vasoconstricción compensatoria de la arteriola eferente (mecanismo clave para mantener la presión intraglomerular en hipoperfusión), lo que precipita un descenso severo de la tasa de filtrado glomerular en estados de hipovolemia."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 3,
        "question": "¿Cuánto tiempo suele demorar en mejorar la función renal en un paciente con necrosis tubular aguda isquémica, una vez resuelta la causa subyacente?",
        "answer": ["7 a 21 días"],
        "options": [
            "24 a 48 horas",
            "7 a 21 días",
            "4 a 6 semanas",
            "Más de 3 meses"
        ],
        "discipline": "Fisiopato",
        "comment": "A diferencia de la injuria prerrenal, la Necrosis Tubular Aguda (NTA) implica daño estructural del epitelio tubular. El proceso de reparación, de-diferenciación y proliferación celular para restaurar la arquitectura tubular requiere típicamente entre 1 y 3 semanas (7 a 21 días)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 4,
        "question": "¿Cuánto debe disminuir el filtrado glomerular (FG) para que los niveles de creatinina sérica superen los valores normales?",
        "answer": ["50% del FG normal"],
        "options": [
            "10% del FG normal",
            "50% del FG normal",
            "75% del FG normal",
            "90% del FG normal"
        ],
        "discipline": "Fisiopato",
        "comment": "Debido a la relación hiperbólica entre la creatinina sérica y el filtrado glomerular (FG), la concentración de creatinina se mantiene dentro de los límites de referencia normales hasta que se pierde aproximadamente el 50% de la función renal."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 5,
        "question": "¿Cuál de los siguientes factores puede contribuir a la hiperfiltración glomerular y a la progresión de la enfermedad renal crónica?",
        "answer": ["Obesidad"],
        "options": [
            "Obesidad",
            "Dieta hipoproteica",
            "Restricción calórica estricta",
            "Uso de inhibidores de la enzima convertidora de angiotensina (IECA)"
        ],
        "discipline": "Fisiopato",
        "comment": "La obesidad induce vasodilitación de la arteriola aferente e incremento del flujo sanguíneo renal y de la presión intraglomerular, provocando hiperfiltración glomerular compensatoria que, mantenida en el tiempo, desencadena glomeruloesclerosis y progresión del daño renal."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 6,
        "question": "¿Qué ocurre con los podocitos durante la progresión de la enfermedad renal crónica?",
        "answer": ["Disminuyen en número por apoptosis y desprendimiento."],
        "options": [
            "Se regeneran a partir de células madre",
            "Aumentan en número para compensar el daño.",
            "Aumentan el espesor para resistir el estrés mecánico",
            "Disminuyen en número por apoptosis y desprendimiento."
        ],
        "discipline": "Fisiopato",
        "comment": "Los podocitos son células terminalmente diferenciadas con capacidad mitótica casi nula. Ante el estrés mecánico (hiperfiltración) o la agresión metabólica sostenida en la ERC, sufren apoptosis y se desprenden hacia el espacio de Bowman, comprometiendo la barrera de filtración."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 7,
        "question": "Indique cuál de los siguientes trastornos del medio interno es uno de los principales mecanismos de daño neurológico secundario en la práctica clínica:",
        "answer": ["Hiponatremia"],
        "options": [
            "Hiponatremia",
            "Hipocalcemia",
            "Hipopotasemia",
            "Hipomagnesemia"
        ],
        "discipline": "Fisiopato",
        "comment": "La hiponatremia reduce la osmolaridad del espacio extracelular, favoreciendo el paso de agua al interior de las células cerebrales por gradiente osmótico. Esto acentúa el edema cerebral citotóxico e incrementa la presión intracraneana, configurando un factor clave de injuria secundaria."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 8,
        "question": "En un sector de parénquima cerebral injuriado con autorregulación abolida, ¿cuál de los siguientes fenómenos puede dar lugar a hipertensión endocraneana por hiperflujo cerebral?",
        "answer": ["Hipertensión arterial"],
        "options": [
            "Hipotermia",
            "Hipocapnia",
            "Hipotensión arterial",
            "Hipertensión arterial"
        ],
        "discipline": "Fisiopato",
        "comment": "Al abolirse la autorregulación vascular cerebral, el flujo sanguíneo pasa a ser dependiente de forma pasiva y lineal de la presión arterial sistémica. Así, la hipertensión arterial eleva abruptamente el volumen sanguíneo cerebral, causando hiperflujo e hipertensión endocraneana."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 9,
        "question": "La hiperventilación es una medida efectiva para reducir la hipertensión endocraneana, ¿sobre qué parámetro actúa para ejercer este efecto?",
        "answer": ["La presión parcial de CO2 arterial"],
        "options": [
            "El metabolismo cerebral",
            "La temperatura sistémica",
            "La presión arterial sistémica",
            "La presión parcial de CO2 arterial"
        ],
        "discipline": "Fisiopato",
        "comment": "La hiperventilación disminuye la PaCO2 (hipocapnia), lo cual provoca una rápida vasoconstricción de las arteriolas cerebrales sensibles al CO2. Esto reduce el volumen sanguíneo cerebral y genera una pronta caída de la presión intracraneana."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 10,
        "question": "En la insuficiencia cardíaca crónica, ¿cómo se encuentran típicamente los niveles de endotelina?",
        "answer": ["Aumentados, contribuyendo a la progresión de la enfermedad."],
        "options": [
            "Disminuidos, debido a la vasodilatación compensatoria.",
            "Normales, ya que no se altera su regulación en esta condición.",
            "Aumentados, contribuyendo a la progresión de la enfermedad."
        ],
        "discipline": "Fisiopato",
        "comment": "En la insuficiencia cardíaca crónica, la activación neurohormonal estimula la síntesis de endotelina-1 (un potente vasoconstrictor y factor pro-remodelativo), lo que incrementa la poscarga vascular y favorece la hipertrofia y fibrosis miocárdica."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 11,
        "question": "En la insuficiencia cardíaca con fracción de eyección del ventrículo izquierdo (FEVI) preservada, ¿cómo se encuentra la presión diastólica final del ventrículo izquierdo?",
        "answer": ["Aumentada, debido a la disfunción diastólica del ventrículo izquierdo."],
        "options": [
            "Disminuida, debido a una relajación ventricular adecuada.",
            "Normal, debido a la ausencia de alteraciones diastólicas.",
            "Aumentada, debido a la disfunción diastólica del ventrículo izquierdo."
        ],
        "discipline": "Fisiopato",
        "comment": "En la ICFE preservada, la alteración en la relajación miocárdica y el aumento de la rigidez ventricular (menor distensibilidad) elevan de forma marcada las presiones de llenado y la presión diastólica final del VI a pesar de mantener un volumen sistólico conservado."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 12,
        "question": "¿Cómo se encuentra el contenido de calcio en el retículo sarcoplásmico de los miocitos en la insuficiencia cardíaca?",
        "answer": ["Disminuido, por alteraciones en la recaptación de calcio"],
        "options": [
            "Disminuido, por alteraciones en la recaptación de calcio",
            "Normal, ya que no se altera la función del retículo sarcoplásmico",
            "Aumentado, debido a una hiperactividad de la SERCA2a"
        ],
        "discipline": "Fisiopato",
        "comment": "En los miocitos con falla cardíaca existe una menor expresión y actividad de la bomba SERCA2a junto a un escape de calcio a través de los receptores de rianodina (RyR2), lo que reduce la reserva intracelular de Ca2+ en el retículo sarcoplásmico y deprime la contractilidad sistólica."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 13,
        "question": "¿Cómo influye un aumento en la frecuencia cardíaca sobre el consumo de oxígeno del miocardio?",
        "answer": ["Aumenta el consumo de oxígeno debido al incremento en el trabajo cardíaco"],
        "options": [
            "Disminuye el consumo de oxígeno al reducir la duración de la sístole.",
            "Aumenta el consumo de oxígeno debido al incremento en el trabajo cardíaco",
            "No afecta el consumo de oxígeno, ya que la frecuencia cardíaca no influye en el metabolismo miocárdico"
        ],
        "discipline": "Fisiopato",
        "comment": "La frecuencia cardíaca es un determinante primario del consumo miocárdico de oxígeno (MVO2). Su elevación incrementa el número de ciclos contráctiles por minuto y el gasto energético total, aumentando la demanda de oxígeno."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 14,
        "question": "¿Cómo se encuentra la reserva de flujo sanguíneo coronario en pacientes con hipertrofia ventricular patológica severa?",
        "answer": ["Disminuida"],
        "options": [
            "Disminuida",
            "Normal",
            "Aumentada"
        ],
        "discipline": "Fisiopato",
        "comment": "La hipertrofia patológica reduce la reserva coronaria debido a la remodelación vascular, la compresión extravascular ejercida por el miocardio engrosado sobre las arterias intramurales y la rarefacción capilar (crecimiento capilar insuficiente para la masa muscular ganada)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 15,
        "question": "¿Qué es el hibernamiento cardíaco?",
        "answer": ["Una respuesta fisiológica del miocardio ante la disminución crónica del flujo sanguíneo coronario"],
        "options": [
            "Una respuesta fisiológica ante episodios de isquemia aguda",
            "Una respuesta fisiológica del miocardio ante la disminución crónica del flujo sanguíneo coronario",
            "Una respuesta patológica en la que el miocardio aumenta su actividad metabólica debido a la insuficiencia cardiaca"
        ],
        "discipline": "Fisiopato",
        "comment": "El miocardio hibernado es un estado adaptativo de disfunción contráctil persistente provocado por una reducción crónica de la perfusión coronaria, en el cual las células miocárdicas reducen su metabolismo y función contráctil para evitar la necrosis."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 16,
        "question": "A un paciente con sospecha de hipertensión pulmonar se le realiza un cateterismo cardíaco derecho y se obtienen los siguientes datos: PAPm = 47 mmHg, PAOP = 11 mmHg, RVP = 6 uW <br> ¿Cuál de las siguientes afirmaciones es correcta con respecto al perfil hemodinámico?",
        "answer": ["Se trata de una hipertensión pulmonar precapilar"],
        "options": [
            "El gradiente transpulmonar es 7",
            "Se trata de una hipertensión pulmonar precapilar",
            "Se trata de una hipertensión pulmonar combinada",
            "Se trata de una hipertensión pulmonar poscapilar aislada"
        ],
        "discipline": "Fisiopato",
        "comment": "Criterios hemodinámicos de Hipertensión Pulmonar Precapilar: Presión Arterial Pulmonar media (PAPm) > 20 mmHg, Presión de Oclusión de Arteria Pulmonar (PAOP) ≤ 15 mmHg y Resistencia Vascular Pulmonar (RVP) > 2 Unidades Wood. Los datos proporcionados cumplen con esta definición."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 17,
        "question": "Durante un cateterismo cardíaco derecho con un catéter de Swan-Ganz, se mide la presión de oclusión pulmonar (PAOP). ¿Qué presión se está estimando de manera indirecta con esta medición?",
        "answer": ["La presión auricular izquierda"],
        "options": [
            "La presión aórtica media",
            "La presión auricular derecha",
            "La presión auricular izquierda",
            "La presión diastólica final del ventrículo derecho"
        ],
        "discipline": "Fisiopato",
        "comment": "Al inflar el balón del catéter de Swan-Ganz en una rama de la arteria pulmonar se ocluye el flujo anterógrado, creando una columna hidráulica continua sin flujo que transmite de forma retrógrada la presión existente en la aurícula izquierda."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 18,
        "question": "¿Cómo es el flujo sanguíneo coronario a través del sistema coronario derecho en condiciones normales?",
        "answer": ["Es sisto-diastólico"],
        "options": [
            "Es sistólico",
            "Es diastólico.",
            "Es sisto-diastólico"
        ],
        "discipline": "Fisiopato",
        "comment": "Dado que el ventrículo derecho maneja presiones intramiocárdicas significativamente más bajas que el ventrículo izquierdo, la compresión de los vasos coronarios durante la sístole es menor, permitiendo una perfusión continua en ambas fases del ciclo cardíaco (sisto-diastólico)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 19,
        "question": "¿Cómo se encuentran los niveles de péptidos natriuréticos biológicamente activos, en un paciente con insuficiencia cardíaca severa? ",
        "answer": ["Disminuidos"],
        "options": [
            "Disminuidos",
            "Normales",
            "Aumentados"
        ],
        "discipline": "Fisiopato",
        "comment": "A pesar de que los precursores inactivos (como el NT-proBNP) están muy elevados por el estiramiento de las cavidades, en la IC avanzada existe un déficit funcional de las moléculas biológicamente activas debido a fallas en el procesamiento enzimático y resistencia a nivel de receptor."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 20,
        "question": "La hipertensión arterial crónica, se asocia con hipertrofia miocárdica, que en etapas iniciales suele ser:",
        "answer": ["Concéntrica"],
        "options": [
            "Mixta",
            "Excéntrica",
            "Concéntrica"
        ],
        "discipline": "Fisiopato",
        "comment": "La hipertensión arterial impone una sobrecarga de presión (aumento de poscarga). La respuesta adaptativa inicial del miocardio es la adición de sarcomeras en paralelo, resultando en un aumento del grosor de la pared sin dilatación de la cavidad (hipertrofia concéntrica)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 21,
        "question": "Con respecto a los determinantes de la presión arterial, las resistencias vasculares sistémicas dependen de:",
        "answer": ["Las propiedades de las arteriolas precapilares"],
        "options": [
            "El shear stress",
            "El gasto cardíaco",
            "Las propiedades de las arteriolas precapilares",
            "Las propiedades de los grandes vasos de capacitancia"
        ],
        "discipline": "Fisiopato",
        "comment": "Las arteriolas precapilares representan el sitio principal de resistencia al flujo en la circulación sistémica debido a su tónica capa muscular lisa y a que su radio es el factor preponderante en la determinación de la Resistencia Vascular Sistémica (Ley de Poiseuille)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 22,
        "question": "¿Qué determina las ondas reflejadas que alcanzan la aorta ascendente durante la diástole precoz posterior a la incisura dícrota?",
        "answer": ["Aumento de la onda de presión"],
        "options": [
            "Aumento de la onda de presión",
            "Disminución de la onda de presión",
            "Eliminación completa de la onda de presión"
        ],
        "discipline": "Fisiopato",
        "comment": "El retorno fisiológico de la onda reflejada durante la diástole precoz genera un refuerzo (aumento) de la presión aórtica diastólica, lo cual beneficia directamente la perfusión del árbol coronario."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 23,
        "question": "¿Cuál de las siguientes es una alteración característica de la insuficiencia hepatocítica?",
        "answer": ["Disminución en la producción de factores de la coagulación"],
        "options": [
            "Aumento de la síntesis plasmática de proteínas",
            "Disminución en la producción de la bilirrubina",
            "Aumento en la eliminación de amoníaco por los riñones",
            "Disminución en la producción de factores de la coagulación"
        ],
        "discipline": "Fisiopato",
        "comment": "El hígado es el responsable de sintetizar la gran mayoría de las proteínas de la cascada de coagulación. La falla en la función hepatocítica conduce a un déficit en su producción, prolongando el tiempo de protrombina."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 24,
        "question": "¿Cuál es una de las consecuencias fisiopatológicas involucradas en la insuficiencia hepatocítica?",
        "answer": ["Reducción en la capacidad de eliminación de toxinas"],
        "options": [
            "Reducción del tono GABA",
            "Aumento en la producción de bilis",
            "Aumento en la síntesis de glucógeno hepático",
            "Reducción en la capacidad de eliminación de toxinas"
        ],
        "discipline": "Fisiopato",
        "comment": "La insuficiencia hepatocítica deteriora los procesos de biotransformación y aclaramiento hepático, reduciendo la depuración de sustancias neurotóxicas como el amoníaco, lo que constituye la base fisiopatológica de la encefalopatía hepática."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 25,
        "question": "¿Cuál de las siguientes opciones sobre la excreción de ceftriaxona es correcta?",
        "answer": ["Biliar próxima al 40%"],
        "options": [
            "Biliar próxima al 40%",
            "Secreción tubular en un 80%",
            "Pulmonar en un 50% y renal un 20%",
            "Hidrólisis por peptidasas plasmáticas"
        ],
        "discipline": "Farmaco",
        "comment": "La ceftriaxona posee una eliminación mixta: aproximadamente un 60% se elimina por filtración glomerular renal y un 40% por vía biliar hacia las heces, característica que evita el ajuste de dosis en insuficiencia renal moderada."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 26,
        "question": "¿Cuál de los siguientes antirretrovirales es un inhibidor de la transcriptasa inversa no nucleosídico?",
        "answer": ["Efavirenz"],
        "options": [
            "Efavirenz",
            "Darunavir",
            "Dolutegravir"
        ],
        "discipline": "Farmaco",
        "comment": "Efavirenz pertenece a la clase de los inhibidores no nucleosídicos de la transcriptasa inversa (ITRNN), los cuales bloquean la síntesis de ADN proviral al unirse a un sitio alostérico cercano al centro activo de la enzima transcriptasa inversa del VIH-1."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 27,
        "question": "¿Cuál de las siguientes propiedades farmacocinéticas de fluconazol es correcta?",
        "answer": ["Alcanza niveles terapéuticos en líquido cefalorraquídeo."],
        "options": [
            "Presenta absorción oral cercana al 10%.",
            "Su eliminación es predominantemente hepática.",
            "Es inductor de diversas isoenzimas del citocromo P450.",
            "Alcanza niveles terapéuticos en líquido cefalorraquídeo."
        ],
        "discipline": "Farmaco",
        "comment": "Gracias a su alta hidrosolubilidad y baja unión a proteínas plasmáticas (11-12%), el fluconazol cruza fácilmente la barrera hematoencefálica, alcanzando concentraciones en el LCR del 70-80% de los niveles plasmáticos correspondientes."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 28,
        "question": "¿Cuál de las siguientes vacunas disponible en el carné esquema de vacunación contiene bacterias vivas atenuadas?",
        "answer": ["BCG"],
        "options": [
            "BCG",
            "Pentavalente",
            "Triple bacteriana (DPT)",
            "Triple bacteriana acelular (dpaT)"
        ],
        "discipline": "Farmaco",
        "comment": "La vacuna BCG (Bacilo de Calmette-Guérin) está elaborada con cepas atenuadas de *Mycobacterium bovis*. Por el contrario, las vacunas DPT/dpaT y Pentavalente utilizan componentes inactivados, acelulares o toxoides bacterianos."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 29,
        "question": "¿Cuál de los siguientes grupos farmacológicos pueden alterar la recirculación enterohepática de los estrógenos y disminuir su efecto anticonceptivo?",
        "answer": ["Antibióticos"],
        "options": [
            "Antiácidos",
            "Analgésicos",
            "Antibióticos",
            "Antiepilépticos"
        ],
        "discipline": "Farmaco",
        "comment": "Los antibióticos de amplio espectro modifican la flora bacteriana intestinal encargada de desconjugar los estrógenos eliminados por la bilis. Al reducir la forma libre reabsorbible, disminuyen la recirculación enterohepática y los niveles plasmáticos del anticonceptivo."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 30,
        "question": "¿Cuál de las siguientes opciones es una contraindicación de anticonceptivos orales combinados?",
        "answer": ["Migraña con aura"],
        "options": [
            "Dislipemia",
            "Hipotiroidismo",
            "Migraña con aura",
            "Tumores ováricos benignos"
        ],
        "discipline": "Farmaco",
        "comment": "La migraña con aura constituye una contraindicación absoluta (categoría 4 de la OMS) para el inicio o continuación de anticonceptivos orales combinados, debido al notable incremento sinérgico del riesgo de accidente cerebrovascular isquémico."
    },

    {
        "info_quest": "3er Parcial 2024",
        "numb": 31,
        "question": "¿Cuál de las siguientes opciones indica una conveniencia terapéutica de los anticonceptivos de progesterona inyectables?",
        "answer": ["Pueden ser usados durante la lactancia"],
        "options": [
            "Se administra a nivel subcutáneo",
            "Pueden ser usados durante la lactancia",
            "Es seguro en el sangrado uterino anormal",
            "Mayor adherencia por su aplicación mensual"
        ],
        "discipline": "Farmaco",
        "comment": "Los anticonceptivos de progestágeno solo no contienen estrógenos (los cuales pueden inhibir la producción de leche y pasar a la leche materna), por lo que son seguros de utilizar durante el período de lactancia sin afectar la composición ni el volumen lácteo."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 32,
        "question": "¿Cuál de los siguientes efectos adversos de los progestágenos puede explicarse por su efecto androgénico?",
        "answer": ["Aumento del acné facial"],
        "options": [
            "Descenso de peso",
            "Aumento del acné facial",
            "Irregularidad menstrual",
            "Insomnio de conciliación"
        ],
        "discipline": "Farmaco",
        "comment": "Ciertos progestágenos (especialmente los derivados de la 19-nortestosterona de primeras generaciones) poseen actividad androgénica residual al unirse a receptores de andrógenos, lo que estimula las glándulas sebáceas e incrementa la producción de sebo y el acné."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 33,
        "question": "¿Cuál es una característica del mecanismo de acción genómico de los glucocorticoides?",
        "answer": ["Presenta similar afinidad por los receptores mineralocorticoideos"],
        "options": [
            "Aumenta la transcripción del gen de la COX-2",
            "Requiere administrar dosis altas para objetivar sus efectos",
            "Los receptores se encuentran ubicados en la membrana celular",
            "Presenta similar afinidad por los receptores mineralocorticoideos"
        ],
        "discipline": "Farmaco",
        "comment": "Los glucocorticoides endógenos (como el cortisol) y diversos análogos tienen una afinidad similar por los receptores mineralocorticoideos (MR) que por los glucocorticoides (GR). En tejidos como el riñón, la enzima 11β-HSD2 convierte el cortisol en cortisona inactiva para evitar la estimulación involuntaria del MR."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 34,
        "question": "¿Cuál es el efecto adverso de los glucocorticoides de uso sistémico cuando se retiran de forma abrupta luego de un período de al menos 15 días de uso?",
        "answer": ["Insuficiencia suprarrenal aguda"],
        "options": [
            "Osteoporosis",
            "Hiperglucemia",
            "Insuficiencia suprarrenal aguda",
            "Disminución de crecimiento y desarrollo"
        ],
        "discipline": "Farmaco",
        "comment": "El tratamiento con glucocorticoides sistémicos durante más de 2 semanas suprime el eje hipotálamo-hipófisis-suprarrenal (HHS). La suspensión brusca deja a la corteza suprarrenal atrófica e incapaz de sintetizar cortisol endógeno, desencadenando una crisis de insuficiencia suprarrenal aguda."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 35,
        "question": "¿Cuál de los siguientes mecanismos podría explicar el efecto broncodilatador de las metilxantinas?",
        "answer": ["Inhibición de la fosfodiesterasa"],
        "options": [
            "Inhibición de la fosfodiesterasa",
            "Liberación de la interleucina-10",
            "Apoptosis de eosinófilos y neutrófilos",
            "Agonismo de receptores de adenosina"
        ],
        "discipline": "Farmaco",
        "comment": "Las metilxantinas (como la teofilina) inhiben no selectivamente las enzimas fosfodiesterasas (PDE), previniendo la degradación del AMPc y GMPc intracelular. El aumento de AMPc en el músculo liso bronquial induce relajación y broncodilatación."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 37,
        "question": "¿Cuál de los siguientes constituye un efectos adversos de los antihistamínicos H1?",
        "answer": ["Clorfeniramina puede provocar ansiedad en pacientes pediátricos"],
        "options": [
            "Levocetirizina puede causar sedación",
            "Difenhidramina puede provocar bradicardia",
            "Clorfeniramina puede provocar ansiedad en pacientes pediátricos",
            "Loratadina puede provocar manifestaciones anticolinérgicas severas "
        ],
        "discipline": "Farmaco",
        "comment": "Los antihistamínicos H1 de primera generación (lipofílicos) atraviesan la barrera hematoencefálica y, aunque habitualmente causan sedación en adultos, en niños pueden generar una reacción paradójica de excitación del SNC caracterizada por inquietud, irritabilidad y ansiedad."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 38,
        "question": "Con relación a las propiedades farmacocinéticas de los macrólidos. Marque la opción correcta.",
        "answer": ["Amplio volumen de distribución"],
        "options": [
            "Eliminación pulmonar",
            "Amplio volumen de distribución",
            "Baja unión a proteínas plasmáticas",
            "Metabolismo enzimático plasmático"
        ],
        "discipline": "Farmaco",
        "comment": "Los macrólidos (como la azitromicina y la claritromicina) son moléculas altamente lipofílicas que penetran y se concentran profusamente en los tejidos periféricos y dentro de los fagocitos, lo que les confiere un elevado volumen de distribución (Vd)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 39,
        "question": "Respecto a los benzimidazoles, ¿cuál de las siguientes opciones sobre el mecanismo de acción de mebendazol es correcta?",
        "answer": ["Inhibición de la polimerización de microtúbulos al unirse a la tubulina β."],
        "options": [
            "Inmovilización de los organismos por polimerización de la tubulina α.",
            "Generación de radicales libres que dañan a los microtúbulos del verme.",
            "Inhibición de la polimerización de microtúbulos al unirse a la tubulina β."
        ],
        "discipline": "Farmaco",
        "comment": "El mebendazol se une selectivamente a la monómero de β-tubulina de los helmintos, impidiendo su polimerización a microtúbulos. Esto altera el transporte intracelular y la captación de glucosa en el parásito, provocando su muerte."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 40,
        "question": "Indique cuál de los siguientes efectos adversos de los agonistas beta-2 adrenérgicos inhalatorios son de tipo A:",
        "answer": ["Taquicardia."],
        "options": [
            "Taquicardia.",
            "Hipertensión.",
            "Hiperpotasemia.",
            "Hipomagnesemia."
        ],
        "discipline": "Farmaco",
        "comment": "Los efectos adversos tipo A son predecibles y dosis-dependientes por extensión de la acción farmacológica. La taquicardia ocurre por estimulación de receptores β1/β2 cardíacos y taquicardia refleja tras vasodilitación periférica al absorberse sistémicamente el fármaco."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 41,
        "question": "¿Cuál de los siguientes antiepilépticos produce como efecto adverso hiponatremia?",
        "answer": ["Carbamazepina."],
        "options": [
            "Fenitoína.",
            "Topiramato.",
            "Pregabalina.",
            "Carbamazepina."
        ],
        "discipline": "Farmaco",
        "comment": "La carbamazepina estimula la liberación de la hormona antidiurética (ADH) y sensibiliza los túbulos renales a su efecto, pudiendo desencadenar un cuadro similar al SIADH e hiponatremia dilucional."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 42,
        "question": "Señale cuál de los siguientes antiepilépticos presenta un estrecho margen terapéutico:",
        "answer": ["Ácido valproico."],
        "options": [
            "Topiramato.",
            "Escitalopram.",
            "Levetiracetam.",
            "Ácido valproico."
        ],
        "discipline": "Farmaco",
        "comment": "El ácido valproico requiere monitorización plasmatica (rango terapéutico habitual 50-100 µg/mL), ya que pequeñas variaciones en la dosis o concentración sanguínea pueden oscilar entre el fallo terapéutico y la toxicidad (hepática, neurológica u hematológica)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 43,
        "question": "Al comienzo de los procesos de inflamación aguda, ¿cuál es la principal célula involucrada?",
        "answer": ["Neutrófilo"],
        "options": [
            "Linfocito",
            "Neutrófilo",
            "Macrófago",
            "Plasmocito"
        ],
        "discipline": "AnatoP",
        "comment": "Los neutrófilos son las primeras células reclutadas en el sitio de la lesión durante la inflamación aguda (predominan ampliamente en las primeras 6 a 24 horas) para fagocitar microbios y detritos tisulares."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 44,
        "question": "¿Cuál de los siguientes procesos de adaptación celular ocurre fisiológicamente en el epitelio de la glándula mamaria durante el embarazo?",
        "answer": ["Hiperplasia"],
        "options": [
            "Atrofia",
            "Hipertrofia",
            "Metaplasia",
            "Hiperplasia"
        ],
        "discipline": "AnatoP",
        "comment": "Durante la gestación, el estímulo hormonal de estrógenos, progesterona y prolactina induce una hiperplasia fisiológica (aumento en el número de células epiteliales glandulares) para la preparación de la lactancia."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 45,
        "question": "¿Cuál de las siguientes opciones indica una característica de la necrosis caseosa?",
        "answer": ["Tiene aspecto blanquecino y friable y es característica de los granulomas tuberculoides."],
        "options": [
            "Tiene aspecto blanquecino y friable y es característica de los granulomas tuberculoides.",
            "Son áreas focales de destrucción de la grasa, con adipocitos necróticos que en su interior presentan depósitos de calcio basófilo.",
            "Tiene aspecto de masa viscosa con material necrótico que suele ser amarillento cremoso por la presencia de leucocitos muertos."
        ],
        "discipline": "AnatoP",
        "comment": "Macroscópicamente, la necrosis caseosa se presenta como un material blanquecino y desmenuzable parecido al queso («caseoso»). Histológicamente se compone de un centro amorfo eosinófilo rodeado por una reacción granulomatosa, típico de la tuberculosis."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 46,
        "question": "¿Cuál de las siguientes lesiones tisulares se caracteriza por presentar necrosis licuefactiva?",
        "answer": ["isquemia en el sistema nervioso central"],
        "options": [
            "tuberculosis pulmonar",
            "isquemia en el tejido cardíaco",
            "isquemia en el sistema nervioso central",
            "lesión tuberculosa en el sistema nervioso central"
        ],
        "discipline": "AnatoP",
        "comment": "A diferencia de la mayoría de los órganos donde la isquemia produce necrosis de coagulación, la hipoxia en el parénquima cerebral provoca necrosis licuefactiva por la rápida digestión enzimática de las células lípido-ricas por parte de las enzimas lisosómicas."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 47,
        "question": "El granuloma de cuerpo extraño característicamente presenta:",
        "answer": ["Células gigantes multinucleadas que engloban el material extraño"],
        "options": [
            "Células gigantes multinucleadas que engloban el material extraño",
            "Células epitelioides con una corona linfocitaria rodeando el mterial extraño",
            "Células epitelioides que delimitan una zona de necrosis licuefactiva que contiene el cuerpo extraño"
        ],
        "discipline": "AnatoP",
        "comment": "Los granulomas por cuerpo extraño se forman en respuesta a sustancias inertes no inmunógenas (hilos de sutura, talco, etc.). Se caracterizan morfológicamente por la presencia de células gigantes multinucleadas tipo cuerpo extraño que adosan o engloban el material inerte."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 48,
        "question": "¿Cuál de los siguientes cambios en la morfología celular es característico del proceso de apoptosis?",
        "answer": ["El tamaño de la célula se reduce y el citoplasma es denso y eosinófilo"],
        "options": [
            "Ocurre un proceso de tumefacción celular",
            "El tamaño de la célula se reduce y el citoplasma es denso y eosinófilo",
            "El tamaño de la célula aumenta y se observa un núcleo con picnosis y ruptura de la membrana celular",
            "Se observa la formación de vacuolas citoplasmáticas y la liberación del contenido celular al espacio extracelular"
        ],
        "discipline": "AnatoP",
        "comment": "La apoptosis cursa morfológicamente con encogimiento celular (retracción), condensación de la cromatina y aumento de la eosinofilia citoplasmática, conservando la integridad de la membrana para formar cuerpos apoptóticos sin generar respuesta inflamatoria."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 49,
        "question": "El exudado es un líquido:",
        "answer": ["Con alto contenido en proteínas y presencia de células sanguíneas."],
        "options": [
            "Con apariencia clara y LDH bajo.",
            "Con apariencia clara y un pH> 7,2.",
            "Con bajo contenido en proteínas y pobre en células sanguíneas.",
            "Con alto contenido en proteínas y presencia de células sanguíneas."
        ],
        "discipline": "AnatoP",
        "comment": "El exudado es un líquido extravascular de origen inflamatorio que resulta del aumento de la permeabilidad vascular, caracterizado por una elevada concentración de proteínas (>3 g/dL) y abundante presencia de células y restos celulares."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 50,
        "question": "En la esteatosis ¿Qué sustancias se acumulan en el interior de las células parenquimatosas?",
        "answer": ["triglicéridos"],
        "options": [
            "proteínas",
            "glucógeno",
            "lipofuccina",
            "triglicéridos"
        ],
        "discipline": "AnatoP",
        "comment": "La esteatosis o cambio graso representa la acumulación anormal de triglicéridos en el interior de células parenquimatosas (observada más frecuentemente en el hígado)."
    },
    {
        "info_quest": "3er Parcial 2024",
        "numb": 51,
        "question": "En las primeras horas tras una injuria sobre un tejido, el tejido de granulación:",
        "answer": ["sufre una proliferación endotelial marcada"],
        "options": [
            "no sufre modificaciones",
            "sufre una proliferación endotelial marcada",
            "se compone principalmente de tejido fibroso y no muestra actividad vascular"
        ],
        "discipline": "AnatoP",
        "comment": "Durante las fases iniciales de la reparación tisular, el tejido de granulación destaca por una intensa angiogénesis promovida por factores como el VEGF, caracterizada por una alta proliferación de células endoteliales para formar nuevos capilares."
    }

];
