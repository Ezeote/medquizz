// creating an array and passing the number, 
let questions = [

    {
    "numb":1,
    "question": "El líquido cefalorraquídeo en la meningitis causada por Haemophilus influenzae tipo b se caracteriza por:",
    "answer": "Ser turbio, presentar abundantes polimorfonucleares y en el directo bacilos Gram negativos",
    "options": [
        "Ser turbio, presentar abundantes polimorfonucleares y en el directo diplococos Gram negativos",
        "Ser claro, presentar abundantes linfocitos y en el directo cocobacilos Gram negativos",
        "Ser turbio, presentar abundantes polimorfonucleares y en el directo bacilos Gram negativos",
        "Ser claro, presentar abundantes polimorfonucleares y en el directo diplococos Gram positivos"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":2,
    "question": "¿Cuál de los siguientes es un factor de virulencia de Escherichia coli enterohemorrágica (EHEC)?",
    "answer": "Toxina Shiga",
    "options": [
        "Toxina Shiga",
        "Hemolisina A",
        "Toxina Termolábil",
        "Pili tipo P manosa resistente"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":3,
    "question": "Mujer de 20 años cursando una pielonefritis aguda. En el urocultivo desarrolla: más de 100.000 UFC/ml de Escherichia coli resistente a ampicilina, cefradina y trimetoprim sulfametoxazol. <br>Sensible a amoxicilina clavulánico, cefuroxime, fosfomicina y nitrofurantoína. <br>¿Qué mecanismo explica la resistencia a betalactámicos en esta cepa?",
    "answer": "Betalactamasa de espectro ampliado (BLEA)",
    "options": [
        "Penicilinasa",
        "Cefalosporinasa de tipo AmpC",
        "Betalactamasa de espectro ampliado (BLEA)",
        "Betalactamasa de espectro extendido (BLEE)"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":4,
    "question": "En la misma paciente de la pregunta anterior, sabiendo que no está embarazada ¿indicaría tratamiento con nitrofurantoína?",
    "answer": "No, porque a pesar de ser sensible el antibiótico no concentra bien en riñón",
    "options": [
        "Si, porque se concentra bien en el tracto urinario y la bacteria es sensible",
        "Si, porque es de uso restringido para las infecciones urinarias y la bacteria es sensible",
        "No, porque a pesar de ser sensible se reserva su uso para las embarazadas",
        "No, porque a pesar de ser sensible el antibiótico no concentra bien en riñón"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":5,
    "question": "¿Como puede observarse Treponema pallidum al microscopio?",
    "answer": "En fresco (sin tinción) en microscopio de campo oscuro",
    "options": [
        "En fresco (sin tinción) en microscopio de campo claro",
        "En fresco (sin tinción) en microscopio de campo oscuro",
        "Mediante tinción de Gram en microscopio de campo claro",
        "Mediante tinción de Zhiel Nielsen en microscopio de campo oscuro"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":6,
    "question": "¿Cuál de las siguientes glicoproteínas permite la adhesión del Virus respiratorio sincitial (VRS) a las células que va a infectar?",
    "answer": "Proteína G",
    "options": [
        "Proteína G",
        "Proteína F",
        "Hemaglutinina",
        "Neuraminidasa"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":7,
    "question": "En el diagnóstico etiológico de las infecciones respiratorias bacterianas, muchas veces resulta útil realizar un examen microscópico directo y cultivar en medios como agar sangre y agar chocolate una muestra de expectoración ¿para cuál de los siguientes agentes esto no resulta adecuado?",
    "answer": "Chlamydia pneumoniae",
    "options": [
        "Chlamydia pneumoniae",
        "Moraxella catarrhalis",
        "Haemophilus influenzae",
        "Streptococcus pneumoniae"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":8,
    "question": "En un paciente con tuberculosis pulmonar que va a ser internado en un hospital, ¿qué medidas se deben tomar además de las precauciones estándar?",
    "answer": "Precauciones aéreas",
    "options": [
        "Precauciones aéreas",
        "Precauciones por gotitas",
        "Precauciones de contacto"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":9,
    "question": "¿Cuál de las siguientes resulta una consecuencia frecuente de la infección por el virus de la Varicela en personas inmunocompetentes?",
    "answer": "La persistencia del virus en los ganglios para-espinales",
    "options": [
        "La persistencia del virus en los ganglios para-espinales",
        "La excreción a través del tubo digestivo hasta erradicar la infección",
        "La persistencia del virus en células del sistema retículo endotelial",
        "La excreción del virus a través de la orina hasta erradicar la infección"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":10,
    "question": "Cuando un paciente presenta una enfermedad post estreptocóccica se realiza la búsqueda de anticuerpos dirigidos contra un factor de virulencia de Streptococcus pyogenes ¿contra cuál de los siguientes factores?",
    "answer": "Estreptolisina O",
    "options": [
        "ADNasa",
        "Estreptolisina O",
        "Ácidos teicoicos",
        "Toxina shock tóxico"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":11,
    "question": "¿Cuál es el mecanismo de resistencia más frecuente de Staphylococcus aureus a las cefalosporinas de 1a generación como la cefradina?",
    "answer": "Síntesis de PBP anómala",
    "options": [
        "Metilación del ribosoma",
        "Síntesis de PBP anómala",
        "Producción de betalactamasas",
        "Expulsión celular del antibiótico"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":12,
    "question": "En un antibiograma por disco difusión para Staphylococcus aureus se observa efecto D entre eritromicina y clindamicina. ¿Qué mecanismo de resistencia presenta?",
    "answer": "Expresión inducible de las metilasas ribosomales para eritromicina",
    "options": [
        "Expresión inducible de las bombas de eflujo para clindamicina",
        "Expresión constitutiva de las bombas de eflujo para clindamicina",
        "Expresión inducible de las metilasas ribosomales para eritromicina",
        "Expresión constitutiva de las metilasas ribosomales para eritromicina"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":13,
    "question": "¿Cuál de las siguientes betalactamasas es inhibida por ácido clavulánico?",
    "answer": "BLEE",
    "options": [
        "KPC",
        "NDM",
        "BLEE",
        "Oxa 48"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":14,
    "question": "Se recibe en una policlínica periférica de primer nivel de atención un paciente de 25 años con un historial de fiebre, sudoración y malestar general de un mes de evolución. Se desprende de los antecedentes que tiene múltiples parejas sexuales, sin uso de métodos de prevención. Dentro de la valoración general se realiza una prueba rápida para VIH la cual resulta reactiva. <br>¿Cuál debería ser la siguiente acción que realizar en este paciente?",
    "answer": "Confirmar la infección mediante Western Blot",
    "options": [
        "Confirmar la infección mediante Western Blot",
        "Confirmar la infección mediante PCR cuantitativa en tiempo real",
        "Solicitar carga viral e iniciar el tratamiento antirretroviral (TARV)",
        "Solicitar recuento de linfocitos TCD4 y comenzar el tratamiento antirretroviral (TARV)"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":15,
    "question": "¿Cuál de las siguientes es una característica del ciclo de replicación del virus de la hepatitis B (HBV)?",
    "answer": "Se generan partículas subvirales implicadas en la modulación de la respuesta inmunológica",
    "options": [
        "Durante el ciclo viral se produce un único tipo de partículas virales",
        "Se produce un único ARN mensajero a partir del cual se traducen todas las proteínas",
        "El genoma viral segmentado determina que en la transcripción se produzcan 5 ARN mensajeros",
        "Se generan partículas subvirales implicadas en la modulación de la respuesta inmunológica"
        ],
        "discipline": "Bacterio",
    },
    {
    "numb":16,
    "question": "¿Cuál de los siguientes factores influye en la patogenia de Trichomonas vaginalis?",
    "answer": "pH de la vagina",
    "options": [
        "Menarca",
        "pH de la vagina",
        "Nivel sanguíneo de IgE",
        "Número de partos vaginales"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":17,
    "question": "¿Cuál de las siguientes complicaciones puede ocurrir como consecuencia de una infección por Trichomonas vaginalis en una mujer embarazada?",
    "answer": "rotura prematura de membranas",
    "options": [
        "pre-eclampsia",
        "diabetes gestacional",
        "rotura prematura de membranas",
        "recién nacido con malformación congénita"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":18,
    "question": "¿Cuál es la forma de presentación clínica más frecuente observada en la neumocistosis?",
    "answer": "Neumonitis intersticial bilateral",
    "options": [
        "Nódulo solitario pulmonar",
        "Masa fúngica en lóbulo superior",
        "Neumonitis intersticial bilateral",
        "Absceso en lóbulo superior derecho"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":19,
    "question": "¿Cuáles de las siguientes tinciones y en qué tipo de muestra biológica, se usan para el diagnóstico de neumocistosis?",
    "answer": "Gomori y Giemsa de lavado broncoalveolar",
    "options": [
        "Gram y Tricrómica de expectoración",
        "Ziehl Neelsen y Gram de expectoración",
        "Gomori y Giemsa de lavado broncoalveolar",
        "Ziehl Neelsen y Tricrómica de lavado broncoalveolar"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":20,
    "question": "¿Cuál de los siguientes agentes es un hongo patógeno primario?",
    "answer": "Microsporum canis",
    "options": [
        "Candida tropicalis",
        "Microsporum canis",
        "Aspergillus fumigatus",
        "Cryptococcus neoformans"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":21,
    "question": "¿A través de qué método paraclínico se confirma el diagnóstico presuntivo de Pitiriasis versicolor?",
    "answer": "del examen micológico directo de las lesiones de piel",
    "options": [
        "de una técnica serológica como doble difusión simple",
        "del examen micológico directo de las lesiones de piel",
        "de un estudio inmunodiagnóstico directo de las lesiones de piel",
        "del cultivo del material de las lesiones de piel en medios de cultivos micológicos habituales"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":22,
    "question": "¿Cuál es la manifestación frecuente de la reactivación de una toxoplasmosis crónica en pacientes inmunocomprometidos?",
    "answer": "Encefalitis con focalidad neurológica acorde con lesión ocupante de espacio",
    "options": [
        "Coriorretinitis, hidrocefalia y calcificaciones cerebrales",
        "Anemia, adenopatías cervicales, anorexia y pérdida de peso",
        "Visceromegalias acompañadas de episodios febriles prolongados",
        "Encefalitis con focalidad neurológica acorde con lesión ocupante de espacio"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":23,
    "question": "¿Cuáles de las siguientes características con respecto a los hospederos, presenta el ciclo biológico de Toxoplasma gondii?",
    "answer": "hospedero intermediario y definitivo, en los que cumple un ciclo heteroxeno",
    "options": [
        "hospedero vertebrado y reservorio no animal con un ciclo monoxeno",
        "hospedero intermediario y definitivo, en los que cumple un ciclo heteroxeno",
        "hospedero reservorio no pudiendo definirse hospedero intermediario o definitivo",
        "hospedero intermediario y definitivo con vectores invertebrados implicados en la transmisión"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":24,
    "question": "¿Cuál de las siguientes características corresponde al ciclo biológico de Giardia lamblia?",
    "answer": "presenta transmisión por fecalismo entre hospedero infectado y hospedero susceptible",
    "options": [
        "su hábitat natural es el intestino grueso del hospedero",
        "tiene un ciclo biológico heteroxeno con un período de incubación de 21 días",
        "presenta transmisión por fecalismo entre hospedero infectado y hospedero susceptible",
        "la forma infectante para el ser humano es el trofozoito y la forma diagnóstica es el quiste binucleado"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":25,
    "question": "Paciente de 54 años, nacido en Paysandú, reside en Canelones desde hace 10 años. Tiene enfermedad renal crónica terminal y se encuentra en lista de espera de trasplante renal cadavérico. Ya tiene estudios serológicos para enfermedad de Chagas. <br>El 11/11/2022 se encuentra donante compatible y se reciben los resultados de la serología para Enfermedad de Chagas. <br>¿Cuál es el riesgo con respecto a la enfermedad de Chagas en este paciente?<br>",
    "answer": "reactivación de enfermedad de Chagas crónica dado que necesita recibir inmunosupresores por el trasplante",
    "options": [
        "contraer enfermedad de Chagas dado que en Canelones se mantiene la transmisión silvestre",
        "adquirir enfermedad de Chagas derivada del trasplante ya que un resultado NO REACTIVO puede corresponder a un falso negativo",
        "reactivación de enfermedad de Chagas crónica dado que necesita recibir inmunosupresores por el trasplante",
        "adquirir enfermedad de Chagas derivada de transfusiones dado que el sangrado intraoperatorio puede requerir transfusión de sangre total"
        ],
        "image": "https://raw.githubusercontent.com/Ezeote/medquizz/refs/heads/main/BCP/14-12-2022E/media/p25.PNG", // Add the image URL here
        "discipline": "Parasito",
    },
    {
    "numb":26,
    "question": "En la Echinococcosis Quística se pueden utilizar técnicas de inmunodiagnóstico para búsqueda de anticuerpos específicos como ELISA, HAI e IFI, <br>¿Cuáles cestodos pueden presentar reactividad cruzada con Echinococcus granulosus?",
    "answer": "Echinococcus multilocularis y Taenia solium",
    "options": [
        "Hymenolepis diminuta y Taenia saginata",
        "Hymenolepis nana y Dipylidium caninum",
        "Taenia saginata y Diphyllobothrium latum",
        "Echinococcus multilocularis y Taenia solium"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":27,
    "question": "¿Qué patología produce en el ser humano la larva de Dermatobia hominis?",
    "answer": "Miasis forunculosa",
    "options": [
        "Tungiasis",
        "Demodicidosis",
        "Miasis forunculosa",
        "Larva migrans cutánea"
        ],
        "discipline": "Parasito",
    },
    {
    "numb":28,
    "question": "¿Qué efecto tiene la anemia sobre el metabolismo del O2?",
    "answer": "Descenso del contenido arterial de O2",
    "options": [
        "Descenso en la extracción de O2",
        "Descenso del contenido arterial de O2",
        "Descenso de la síntesis de eritropoyetina",
        "Aumento de la disponibilidad sistémica de O2"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":29,
    "question": "¿Cuál de las siguientes es una característica de la hipoxia citopática?",
    "answer": "Ocurre como consecuencia de daño y disfunción mitocondrial",
    "options": [
        "Causa un aumento de la glucólisis aerobia",
        "Ocurre como consecuencia de daño y disfunción mitocondrial",
        "Tiene como requisito indispensable la presencia de hipoperfusión tisular"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":30,
    "question": "Un paciente de 45 años es traído a la puerta de emergencia con convulsiones, de la paraclínica se destaca natremia de 115 mEq/L <br>¿Cuál es el mecanismo fisiopatológico que puede explicar la sintomatología del paciente?",
    "answer": "Edema cerebral",
    "options": [
        "Edema cerebral",
        "Mielinolisis osmótica",
        "Disminución del sodio corporal total",
        "Aumento del volumen del líquido extracelular"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":31,
    "question": "¿Cuál de los siguientes mecanismos se desencadenan frente a una pérdida severa de volumen del líquido extracelular?",
    "answer": "Aumento de la hormona antidiurética",
    "options": [
        "Aumento del péptido natriurético",
        "Disminución de la secreción de renina",
        "Aumento de la hormona antidiurética",
        "Disminución de los niveles circulantes de catecolaminas"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":32,
    "question": "¿Cuál de las siguientes situaciones determina una acidosis metabólica con agujero aniónico normal?",
    "answer": "Diarrea",
    "options": [
        "Diarrea",
        "Cetoacidosis diabética",
        "Intoxicación por etanol",
        "Hipoperfusión con producción de ácido láctico"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":33,
    "question": "Con los siguientes datos de una gasometría arterial: pH 7.1 HCO3 12 mEq/L PaCO2 38 mmHg ¿Qué alteración ácido-base presenta?",
    "answer": "Acidosis metabólica con respuesta adaptativa inadecuada",
    "options": [
        "Acidosis metabólica con respuesta adaptativa adecuada",
        "Alcalosis metabólica con respuesta adaptativa adecuada",
        "Alcalosis metabólica con respuesta adaptativa inadecuada",
        "Acidosis metabólica con respuesta adaptativa inadecuada"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":34,
    "question": "¿Qué alteración espera encontrar en la espirometría de un paciente con enfermedad pulmonar obstructiva crónica (EPOC)?",
    "answer": "Limitación al flujo principalmente en espiración",
    "options": [
        "Descenso del volumen residual",
        "Colapso de la vía aérea superior",
        "Respuesta significativa a los broncodilatadores",
        "Limitación al flujo principalmente en espiración"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":35,
    "question": "Un paciente en ventilación mecánica que requiere una diferencia de presión (∆P) de 17 cmH2O para mover 350 ml de volumen corriente, luego de un tratamiento requiere 10 cmH2O de ∆P de para mover el mismo volumen corriente. <br>¿Qué cambio ocurrió́en la mecánica ventilatoria?",
    "answer": "Descenso de la elastancia pulmonar",
    "options": [
        "Descenso del volumen espirado",
        "Aumento del trabajo respiratorio",
        "Descenso de la elastancia pulmonar",
        "Aumento de la resistencia de vía aérea"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":36,
    "question": "¿Cuál de las siguientes es una característica de la reserva de flujo sanguíneo coronario?",
    "answer": "Se encuentra disminuida en pacientes con hipertrofia ventricular patológica severa.",
    "options": [
        "Se encuentra disminuida en pacientes con hipertrofia ventricular patológica severa.",
        "No se verá alterada en pacientes con lesiones coronarias obstructivas severas.",
        "Representa un mecanismo fisiológico raramente utilizada por el miocardio en actividad.",
        "Permite mantener un mismo flujo sanguíneo coronario a pesar de cambios en la presión de perfusión coronaria. "
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":37,
    "question": "¿Qué alteración es característica de la isquemia miocárdica?",
    "answer": "Áreas de miocardio que mantienen disfunción contráctil luego de la reperfusión",
    "options": [
        "Muerte celular por necrosis en toda el área de miocardio isquémico.",
        "De existir preacondicionamiento isquémico, ocurrirá mayor daño miocárdico",
        "Hibernamiento miocárdico ante la disminución aguda del flujo sanguíneo coronario",
        "Áreas de miocardio que mantienen disfunción contráctil luego de la reperfusión"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":38,
    "question": "¿Cuál de los siguientes es un factor principal de injuria encefálica secundaria?",
    "answer": "Actividad epiléptica",
    "options": [
        "Hipertensión arterial",
        "Actividad epiléptica",
        "Hipernatremia",
        "Hipotermia"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":39,
    "question": "¿Qué parámetro hemodinámico puede diferenciar el shock causado por un tromboembolismo pulmonar del shock causado por una hemorragia?",
    "answer": "Presión auricular derecha",
    "options": [
        "Gasto cardíaco",
        "Resistencias vasculares periféricas",
        "Presión auricular derecha",
        "Presión arterial media"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":40,
    "question": "La relación entre el filtrado glomerular y la creatinina sérica se puede observar en la siguiente figura. Cuando la creatinina sérica de un paciente asciende de 6 a 8 mg/dL <br>¿Qué ocurre con el filtrado glomerular?<br>",
    "answer": "Traduce una pequeña disminución del filtrado glomerular",
    "options": [
        "Disminución similar a la observada cuando la creatinina sérica asciende de 1 a 3 ml/min",
        "Mayor descenso que el observado cuando la creatinina sérica asciende de 2 a 4 ml/min.",
        "Traduce una pequeña disminución del filtrado glomerular"
        ],
        "image": "https://raw.githubusercontent.com/Ezeote/medquizz/refs/heads/main/BCP/14-12-2022E/media/p40.PNG", // Add the image URL here
        "discipline": "Fisiopato",
    },
    {
    "numb":41,
    "question": "¿Cuál de los siguientes es un reactante de fase aguda negativo?",
    "answer": "Albúmina",
    "options": [
        "Albúmina",
        "Proteína C reactiva",
        "Suncia amiloide (proteína amiloide A)",
        "Componente C3 del sistema del complemento"
        ],
        "discipline": "Fisiopato",
    },
    {
    "numb":42,
    "question": "¿Cuál de las siguientes opciones es correcta con respecto al fármaco agonista que se representa en la curva número 3?<br>",
    "answer": "Tiene menor actividad intrínseca que el de la curva número 2",
    "options": [
        "Su afinidad es mayor que el de la curva número 1",
        "Tiene mayor pendiente que el de la curva número 2",
        "Presenta mayor potencia que el de la curva número 1",
        "Tiene menor actividad intrínseca que el de la curva número 2"
        ],
        "image": "https://raw.githubusercontent.com/Ezeote/medquizz/refs/heads/main/BCP/14-12-2022E/media/p42.PNG", // Add the image URL here
        "discipline": "Farmaco",
    },
    {
    "numb":43,
    "question": "Suponiendo que un fármaco X se metaboliza por el citocromo P450 3A4. <br>¿Qué interacción espera encontrar con la administración del antibiótico macrólido claritromicina?",
    "answer": "Aumento de la concentración plasmática del fármaco X",
    "options": [
        "Aumento de la concentración plasmática del fármaco X",
        "Disminución de la concentración plasmática del fármaco X",
        "Riesgo de presentar niveles sub-terapéuticos del fármaco X",
        "Aumento de la afinidad del fármaco X por proteínas plasmáticas"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":44,
    "question": "¿Cuál es la principal diferencia de un efecto adverso con respecto a un efecto tóxico?",
    "answer": "Ocurre a concentraciones terapéuticas",
    "options": [
        "Su presentación es menos grave",
        "Ocurre a concentraciones terapéuticas",
        "Se ve en fármacos de rango terapéutico estrecho"
        ],
        "discipline": "Farmaco",
    },
    {   
    "numb": 45,
    "question": "45 Mujer de 25 años presenta dolor tipo cólico por lo cual toma 1 comprimido de 20 mg de Buscapina (metilbromuro de escopolamina) ¿Cuál de las siguientes reacciones adversas es más esperable en esta paciente?",
    "answer": "Boca seca",
    "options": [
        "Boca seca",
        "Bradicardia",
        "Aumento de micción",
        "Aumento de sudoración"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":46,
    "question": "¿Cuál de las siguientes opciones corresponde característicamente a un efecto adverso tipo B (idiosincrático)?",
    "answer": "Agranulocitosis por dipirona",
    "options": [
        "Gastritis por ketoprofeno",
        "Taquicardia por salbutamol",
        "Agranulocitosis por dipirona",
        "Depresión respiratoria por morfina"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":47,
    "question": "¿Cuál de los siguientes antihistamínicos antiH1 tiene mayor riesgo de producir reacciones adversas antimuscarínicas?",
    "answer": "Difenhidramina",
    "options": [
        "Loratadina",
        "Fexofenadina",
        "Desloratadina",
        "Difenhidramina"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":48,
    "question": "¿Cuál de las siguientes características farmacológicas explica mejor que bromuro de ipratropio presente menor incidencia de efectos adversos que atropina?",
    "answer": "Presentar en su estructura un átomo de nitrógeno cuaternario",
    "options": [
        "Presentar en su estructura un átomo de nitrógeno cuaternario",
        "Tener selectividad por receptores muscarínicos M1 Y M2",
        "Presentar una vida media de eliminación ultracorta"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":49,
    "question": "¿Cuál de los siguientes efectos adversos puede observarse característicamente con el uso de difenilhidantoína intravenosa?",
    "answer": "Arritmias",
    "options": [
        "Arritmias",
        "Hipertensión",
        "Hipercalcemia",
        "Hipernatremia"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":50,
    "question": "¿Cuál de las siguientes disionias puede observarse característicamente con el uso de agonistas beta 2 adrenérgicos a dosis altas?",
    "answer": "hipopostasemia",
    "options": [
        "hipernatremia",
        "hipopostasemia",
        "hiperpotasemia",
        "hipomagnesemia"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":51,
    "question": "¿Cuál de las siguientes pautas posológicas ha demostrado que disminuye el riesgo de nefrotoxicidad por aminoglucósidos?",
    "answer": "Administración una vez al día",
    "options": [
        "Uso en Infusión continua",
        "Uso en bolo cada 6 horas",
        "Administración cada 8 horas",
        "Administración una vez al día"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":52,
    "question": "¿Cuál de los siguientes mecanismos explica mejor el efecto antiinflamatorio de los glucocorticoides inhalados en el asma?",
    "answer": "Inhibición de la infiltración pulmonar tardía por linfocitos T",
    "options": [
        "Relajación del músculo liso bronquial",
        "Inhibición de la infiltración pulmonar tardía por linfocitos T",
        "Inhibición de la liberación de mediadores de mastocitos pulmonares",
        "Bloqueo la respuesta inmediata a alergenos observado en dosis única"
        ],
        "discipline": "Farmaco",
    },
    {
    "numb":53,
    "question": "¿Cuál es el significado de la transferencia lineal de energía (TLE) de las radiaciones?",
    "answer": "es la cantidad de energía transferida al material absorbente por unidad de distancia.",
    "options": [
        "es la cantidad de energía transferida al material absorbente por unidad de distancia.",
        "es la cantidad de energía transferida al material absorbente por unidad de tiempo.",
        "es la cantidad de ionizaciones realizadas por la tasa de dosis de la radiación.",
        "es la cantidad de ionizaciones por desintegraciones atómicas en el tiempo."
        ],
        "discipline": "Biofisica",
    },
    {
    "numb":54,
    "question": "¿En cuanto a la utilización de blindajes como método de radioportección, que representa la capa hemireductora?",
    "answer": "representa el espesor que disminuye la intensidad de fotones inicial a la mitad",
    "options": [
        "representa la intensidad de radiación incidente en el blindaje",
        "representa el espesor que disminuye la intensidad de fotones inicial 10 veces",
        "representa el espesor que disminuye la intensidad de fotones inicial a la mitad",
        "representa el coeficiente de atenuación (µ) relacionado con el efecto Compton"
        ],
        "discipline": "Biofisica",
    },
    {
    "numb":55,
    "question": "Si una embarazada transitando el periodo fetal tardío se expone a radiaciones ionizantes, el efecto sobre el niño será:",
    "answer": "Aumento del riesgo de la inducción de cáncer",
    "options": [
        "Efecto de todo o nada",
        "Retardo en el crecimiento",
        "Disminución del coeficiente intelectual",
        "Aumento del riesgo de la inducción de cáncer"
        ],
        "discipline": "Biofisica",
    },
    {
    "numb":56,
    "question": "La reparación por recombinación homóloga se caracteriza por reparar:",
    "answer": "las roturas dobles de cadena",
    "options": [
        "las pérdidas de bases",
        "las roturas dobles de cadena",
        "las roturas simples de cadena",
        "las uniones de proteínas al ADN"
        ],
        "discipline": "Biofisica",
    },
    {
    "numb":57,
    "question": "La acumulación anormal de triglicéridos intracelular se denomina:",
    "answer": "Esteatosis",
    "options": [
        "Esteatosis",
        "Amiloidosis",
        "Glucogenosis",
        "Aterosclerosis"
        ],
        "discipline": "AnatoP",
    },
    {
    "numb":58,
    "question": "Histológicamente ¿cuál de las siguientes técnicas se utiliza para evidenciar el colágeno?",
    "answer": "Tinción tricrómica",
    "options": [
        "Giemsa",
        "Orceína",
        "Tinción tricrómica",
        "Acido periódico de Schiff"
        ],
        "discipline": "AnatoP",
    },
    {
    "numb":59,
    "question": "La inflamación granulomatosa es una forma de inflamación crónica caracterizada por:",
    "answer": "Una acumulación de macrófagos activados",
    "options": [
        "Una colección de neutrófilos",
        "Una acumulación eosinofilos",
        "Vasos sanguíneos recién formados",
        "Una acumulación de macrófagos activados"
        ],
        "discipline": "AnatoP",
    },
    {
    "numb":60,
    "question": "¿Cuál es el tipo de necrosis que se caracteriza por el depósito de complejos antígeno-anticuerpo en la pared de los vasos sanguíneos?",
    "answer": "Necrosis fibrinoide",
    "options": [
        "Necrosis caseosa",
        "Necrosis fibrinoide",
        "Necrosis licuefactiva",
        "Necrosis gangrenosa"
    ],
    "discipline": "AnatoP",
    }
];