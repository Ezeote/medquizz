// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    "numb": 1,
    "question": "Paciente de 55 años, tabaquista intenso, que consulta por tos con expectoración mucopurulenta y fiebre de 3 días de evolución. Al examen se ausculta un foco de estertores crepitantes en base de hemitórax izquierdo compatible con la radiografia de tórax que muestra foco de consolidación. El médico realiza diagnóstico de neumonía aguda comunitaria. <br> ¿Qué elementos en la observación microscópica son sugestivos de que una muestra de expectoración es representativa del tracto respiratorio inferior en este paciente?",
    "answer": "Escasas células epiteliales planas (menos de 10 por campo)",
    "options": [
      "Escasas células epiteliales planas (menos de 10 por campo)",
      "Células epiteliales con la presencia de bacteriasintracelulares",
      "La presencia de al menos 50 células cilíndricas sugestivas del epitelio respiratorio inferior"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 2,
    "question": "Si el agente responsable de la neumonia del paciente anterior fuera Streptococcus pneumoniae ¿Cómo lo observaría al microscopio óptico?",
    "answer": "Diplococos Gram positivos en forma de antifaz",
    "options": [
      "Bacilos Gram positivos en cadenas",
      "Bacilos Gram negativos pleomórficos",
      "Diplococos Gram positivos en forma de antifaz",
      "Diplococos Gram negativos con forma de granos de café"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 3,
    "question": " ¿Cuál de las siguientes bacterias gram positivas es un agente frecuente de infecciones del tracto urinario bajo en mujeres jóvenes sexualmente activas?",
    "answer": "Staphylococcus saprophyticus",
    "options": [
      "Streptococcus pyogenes",
      "Streptococcus agalactiae",
      "Staphylococcus epidermidis",
      "Staphylococcus saprophyticus"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 4,
    "question": " ¿Cómo es el perfil de sensibilidad de S. aureus meticilino resistente procedente de lacomunidad?",
    "answer": "Resistente a todos los betalactámicos excepto cefalosporinas de 5ta generación",
    "options": [
      "Resistente a meticilina y sensible al resto de los betalactámicos",
      "Resistente a todos los betalactámicos excepto cefalosporinas de 5ta generación",
      "Resistente a betalactámicos y resistente al menos a otros 2 grupos de antibióticos"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 5,
    "question": "¿Cuál de las siguientes condiciones son características de la multiplicación de S. aureus en medios de cultivo sólidos en el laboratorio? ",
    "answer": "No son exigentes nutricionalmente y presentan rápido crecimiento observándose colonias luego de 18-24 horas de incubación",
    "options": [
      "Requieren temperaturas de incubación de 42º C para lograr obtener colonias en 24 horas de incubación",
      "Requieren una atmósfera enriquecida con CO2 para lograr obtener colonias en 24 horas de incubación",
      "No son exigentes nutricionalmente y presentan rápido crecimiento observándose colonias luego de 18-24 horas de incubación",
      "Solo pueden multiplicarse en medios ricos como el agar sangre y requieren al menos 48 horas de incubación para poder observar colonias"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 6,
    "question": ") La vacuna pentavalente que se encuentra incluida en el certificado esquema de vacunación de nuestro país protege contra:",
    "answer": "Difteria, tos convulsa, tétanos, hepatitis B y enfermedad invasiva por H.influenzae tipo b",
    "options": [
      "Sarampión, rubéola, parotiditis, polio y varicela",
      "Tuberculosis, sarampión, varicela, hepatitis A y hepatitis B",
      "Enfermedad grave causada por 5 serotipos de Streptococcus pneumoniae",
      "Difteria, tos convulsa, tétanos, hepatitis B y enfermedad invasiva por H.influenzae tipo b"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 7,
    "question": "¿Cuál de las siguientes es una medida eficaz para prevenir la infección respiratoria por adenovirus? ",
    "answer": "Lavado de manos",
    "options": [
      "Lavado de manos",
      "La vacunación antigripal anual",
      "La inmunización secundaria generada por exposición previa a este virus"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 8,
    "question": "¿Cuál es el estudio más adecuado para la identificación etiológica en la bronquiolitis?",
    "answer": "Búsqueda de antigenos o de ácidos nucleicos del agente en aspirado naso-faríngeo",
    "options": [
      "Búsqueda de anticuerpos específicos contra el agente en suero",
      "Búsqueda de antigenos o de ácidos nucleicos del agente en aspirado naso-faríngeo",
      "Cultivo de la expectoración en medios sólidos ricos como el agar sangre para aislar alagente",
      "Estudio microscópico con tinción de Gram del aspirado naso-faringeo para visualizar el agente"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 9,
    "question": " ¿Cuáles son los cambios producidos en el epitelio intestinal en la diarrea causada por Rotavirus en niños?",
    "answer": "Atrofia y acortamiento de las microvellosidades, disrupción de las uniones estrechas e infiltrado en parches con áreas de mucosa indemne",
    "options": [
      "Destrucción de las células epiteliales del intestino a nivel del ciego y delrecto",
      "Formación de pedestales que permiten la unión viral íntima y el borramiento de las microvellosidades en el intestino delgado",
      "Atrofia y acortamiento de las microvellosidades, disrupción de las uniones estrechas e infiltrado en parches con áreas de mucosa indemne"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 10,
    "question": "¿Qué características estructurales presentan los papilomavirus humanos (HPV)?",
    "answer": "Son virus desnudos con cápside icosaédrica y genoma de ADN de doblehebra",
    "options": [
      "Son virus envueltos con cápside helicoidal y genoma de ADN de doble hebra",
      "Son virus envueltos con cápside icosaédrica y genoma de ADN de hebra única",
      "Son virus desnudos con cápside icosaédrica y genoma de ADN de doblehebra",
      "Son virus desnudos con cápside helicoidal y genoma de ADN de hebra única"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 11,
    "question": "Una de las dificultades del diagnóstico de sífilis congénita en el recién nacido es el traspaso de anticuerpos IgG maternos al bebé por la placenta. Utilizando una prueba de RPR o de VDRL en el recién nacido y en la madre: <br> ¿Qué titulo de anticuerpos se debe constatar en un recién nacido sin clínica sugestiva de infección por T. pallidum para realizar el diagnóstico?",
    "answer": "El cuádruple que el de la madre",
    "options": [
      "Igual al de la madre",
      "El doble que el de la madre",
      "El triple que el de la madre",
      "El cuádruple que el de la madre"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 12,
    "question": "En el virus de hepatitis B existen 3 antígenos principales: antigeno de superficie (Ag-S), antigeno del core (Ag-y antigeno e (Ag-e) <br> ¿Cuál de los siguientes marcadores serológicos puede indicar haber recibido la vacuna contra el virus de la hepatitis B pero no haber estado infectado?",
    "answer": "Presencia de anticuerpos anti Ag-S; ausencia de anticuerpos anti Ag-C y anti Ag-e",
    "options": [
      "Presencia de anticuerpos anti Ag-S, anti Ag-C y anti Ag-e",
      "Presencia de anticuerpos anti Ag-S y anti Ag-C; ausencia de anticuerpos anti Ag-e",
      "Presencia de anticuerpos anti Ag-S y anti Ag-e; ausencia de anticuerpos anti Ag-C",
      "Presencia de anticuerpos anti Ag-S; ausencia de anticuerpos anti Ag-C y anti Ag-e"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 13,
    "question": "¿Cuál es el perfil de sensibilidad a los betalactámicos de una cepa de E. coli portadora deuna Betalactamasa de espectro extendido (BLEE)",
    "answer": "Resistencia a ampicilina, cefradina, cefuroxime y ceGriaxona; sensibilidad a meropenem",
    "options": [
      "Resistencia a ampicilina, cefuroxime, ceftriaxona y meropenem",
      "Resistencia a ampicilina, cefradina, cefuroxime y ceGriaxona; sensibilidad a meropenem",
      "Resistencia a ampicilina y cefradina; sensibilidad a cefuroxime, ceftriaxona y meropenem",
      "Resistencia a ampicilina; sensibilidad a cefradina, cefuroxime, ceftriaxona y meropenem"
    ],
    "discipline": "Bacterio",
  },
  {
    "numb": 14,
    "question": "¿Cómo se realiza el diagnóstico de neurotoxoplasmosis en el paciente con infección por VIH y con menos de 200 CD4/mm3 ? ",
    "answer": "En forma presuntiva con el pilar clínico, epidemiológico, imagenológico y evolutivo",
    "options": [
      "Mediante serología",
      "En la mayoría de los casos a través de biopsia cerebral",
      "Mediante la medición de la presión de apertura al realizar la punción lumbar",
      "En forma presuntiva con el pilar clínico, epidemiológico, imagenológico y evolutivo"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 15,
    "question": "Con respecto a la patogenia de la neurotoxoplasmosis señale la afirmación correcta:",
    "answer": "Los leucocitos ofrecen un nicho intracelular seguro para la diseminación hematógena de Toxoplasma gondii",
    "options": [
      "Toxoplasma gondii se disemina a través de la circulación sanguínea como bradizoíto libre",
      "Los leucocitos ofrecen un nicho intracelular seguro para la diseminación hematógena de Toxoplasma gondii",
      "Los vasos sanguíneos del plexo coroideo presentan un rol claro en la diseminación delos toxoplasmas por el líquido cefalorraquídeo",
      "La infección de las células endoteliales de la vasculatura del parénquima cerebral por Toxoplasma gondii es innecesaria para la penetración al sistema nervioso central"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 16,
    "question": "¿Cuál de las siguientes características de los estadios evolutivos de Toxoplasma gondii es lacorrecta?",
    "answer": "El trofozoito se reproduce por endodiogenia en una vacuola parasitófora",
    "options": [
      "El taquizoíto se encuentra dentro de los quistes tisulares",
      "El bradizoíto es el responsable de la reproducción rápida",
      "El trofozoito se reproduce por endodiogenia en una vacuola parasitófora",
      "El trofozoíto es multicelular y se disemina a través de la circulación sanguínea como bradizoíto libre"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 17,
    "question": "Con respecto a las técnicas para realizar el diagnóstico de la criptococosis meningoencefálica <br> ¿cuál de las siguientes aseveraciones es la correcta?",
    "answer": "La tinta china realizada al líquido cefalorraquídeo es una técnica diagnóstica válida, que cuando resulta positiva habilita a iniciar el tratamiento antimicótico",
    "options": [
      "La medición de la presión de apertura al realizar la punción lumbar es una maniobranecesaria",
      "El estudio citológico y bioquímico del líquido cefalorraquídeo con valores dentro de parámetros normales lo descarta",
      "Se necesita el desarrollo de levaduras Cryptococcus spp en el cultivo del líquido cefalorraquídeo para confirmar el diagnóstico y dar inicio altratamiento",
      "La tinta china realizada al líquido cefalorraquídeo es una técnica diagnóstica válida, que cuando resulta positiva habilita a iniciar el tratamiento antimicótico"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 18,
    "question": "¿Cuáles son las características morfológicas y clínicas del complejo Sporothrix schenckii? ",
    "answer": "Es un hongo dimorfo que afecta dermis e hipodermis",
    "options": [
      "Es un hongo filamentoso que afecta piel y faneras",
      "Es un hongo levaduriforme que afecta piel y faneras",
      "Es un hongo dimorfo que afecta dermis e hipodermis",
      "Es un hongo dimorfo que afecta mucosas y genera linfangitis"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 19,
    "question": "En relación a la etiopatogenia de la pitiriasis versicolor ¿cuál es la afirmacióncorrecta? ",
    "answer": "Las lesiones hipocrómicas se producen por una disminución de la producción de melanina",
    "options": [
      "Las lesiones hipocrómicas se producen por una disminución de la producción de melanina",
      "Las lesiones hipocrómicas se producen por un aumento en el tamaño de los melanosomas",
      "Las lesiones hipercrómicas se producen por una disminución en la producción demelanina",
      "Las lesiones hipercrómicas se producen por una disminución en el tamaño de losmelanosomas"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 20,
    "question": "¿Cuál de los siguientes dermatofitos es zoofilico?",
    "answer": "Trichophyton verrucosum",
    "options": [
      "Trichophyton rubrum",
      "Microsporum gypseum",
      "Trichophyton verrucosum",
      "Epidermophyton floccosum"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 21,
    "question": "¿Cuál de los siguientes helmintos es agente etiológico del síndrome de larva migrans cutánea?",
    "answer": "Ancylostoma caninum",
    "options": [
      "Taenia saginata",
      "Trichuris trichiura",
      "Ascaris lumbricoides",
      "Ancylostoma caninum"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 22,
    "question": "¿Cuál es el tratamiento oral de elección para la ascaridiasis en un escolar?",
    "answer": "Mebendazol",
    "options": [
      "Ivermectina",
      "Mebendazol",
      "Metronidazol",
      "Praziquantel"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 23,
    "question": "¿Cuál de las siguientes relaciones de vector/agente es correcta?",
    "answer": "Triatoma rubrovaria / Trypanosoma cruzi",
    "options": [
      "Culex pipiens / Toxoplasma gondii",
      "Triatoma rubrovaria / Trypanosoma cruzi",
      "Lutzomyia longipalpis / Plasmodium falciparum",
      "Pediculus humanus var. corporis / Leishmania infantum"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 24,
    "question": "¿Frente a cuál de las siguientes características clínicas y/o epidemiológicas que presenta el paciente, el médico debe sospechar de leishmaniosis visceral?",
    "answer": "Noción epidemiológica en el último año, hepatoesplenomegalia y fiebre de más de 15 días de evolución",
    "options": [
      "Artralgias, mialgias, cefaleas y fiebre desde hace 2 días",
      "Procedencia de zona endémica y fiebre de 72 horas de evolución sin otros síntomasagregados",
      "Noción epidemiológica en el último año, hepatoesplenomegalia y fiebre de más de 15 días de evolución",
      "Adenomegalias en varios territorios ganglionares de 15 días de evolución, anorexia, astenia, sin otros elementos a destacar"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 25,
    "question": "¿Cómo se denomina la forma clínica por la cual ocurre implantación de un protoescólex a nivel local o en serosas por rotura de un quiste hidático fértil?",
    "answer": "Hidatidosis secundaria",
    "options": [
      "Hidatidosis secundaria",
      "Hidatidosis heterotópica",
      "Hidatidosis primaria sintomática",
      "Hidatidosis primaria asintomática"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 26,
    "question": "¿Cuál esla forma evolutiva de Fasciola hepatica presente en los vegetales acuáticos capaz de infectar al humano?",
    "answer": "Metacercarias provenientes de cercarias liberadas del caracol",
    "options": [
      "Redias liberadas del caracol",
      "Miracidios eclosionados de huevos embrionados",
      "Metacercarias provenientes de cercarias liberadas del caracol",
      "Huevos anembrionados expulsados en las heces de hospederos definitivos"
    ],
    "discipline": "Parasito",
  },
  {
    "numb": 27,
    "question": "Paciente de 54 años posoperatorio inmediato de cirugía de resección pulmonar por toracotomía. <br> Indique el tipo de dolor agudo experimentado por el paciente en las primeras horas del posoperatorio:",
    "answer": "Somático",
    "options": [
      "Visceral",
      "Somático",
      "Neuropático"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 28,
    "question": "¿Cuáles serían las repercusiones del dolor agudo en el paciente de la pregunta anterior?",
    "answer": "Intensa respuesta simpática con taquicardia y aumento del consumo miocárdico deoxígeno",
    "options": [
      "Intensa respuesta vagal con taquicardia y aumento del consumo miocárdico de oxígeno",
      "Intensa respuesta vagal con bradicardia y disminución del consumo miocárdico de oxígeno",
      "Intensa respuesta simpática con taquicardia y aumento del consumo miocárdico deoxígeno",
      "Intensa respuesta simpática con bradicardia y disminución del consumo miocárdico deoxígeno"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 29,
    "question": "¿Cuál es el principal mecanismo responsable de la formación de edemas generalizados enla insuficiencia cardíaca? ",
    "answer": "Aumento de presión hidrostática capilar",
    "options": [
      "Aumento de la permeabilidad vascular",
      "Aumento de presión hidrostática capilar",
      "Aumento de la presión oncótica intersticial",
      "Aumento de la presión hidrostática intersticial"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 30,
    "question": "¿Cuál de los siguientes sistemas homeostáticos es más importante para regular la excreción renal de agua libre?",
    "answer": "Arginina-vasopresina",
    "options": [
      "Nervioso simpático",
      "Arginina-vasopresina", 
      "Nervioso parasimpático", 
      "Renina-angiotensina-aldosterona"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 31,
    "question": "Un paciente de 35 años ingresa al servicio de emergencia por una crisis asmática prolongada. Se realiza tratamiento con salbutamol inhalatorio. Indique la principal repercusión de este tratamiento sobre el balance de potasio:",
    "answer": "Aumento de la captación celular de K +",
    "options": [
      "Aumento de la reabsorción renal de K +",
      "Aumento de la captación celular de K +",
      "Disminución de la eliminación renal de K +",
      "Disminución de la excreción intestinal de K +"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 32,
    "question": "Indique el mecanismo más frecuente de generación de alcalosis metabólica:",
    "answer": "Pérdida neta de ácido clorhídrico",
    "options": [
      "Hiperventilación alveolar",
      "Ganancia exógena de álcali",
      "Pérdida neta de ácido clorhídrico",
      "Disminución de volumen del líquido extracelular"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 33,
    "question": "Marque la opción correcta con respecto a la patogenia de la hipertensión arterialesencial:",
    "answer": "La elevada relación sodio/potasio en la dieta se asocia a su desarrollo",
    "options": [
      "Puede explicarse por la afectación de un único gen",
      "No hay factores genéticos asociados al desarrollo de la misma",
      "Los factores ambientales no están involucrados en su patogenia",
      "La elevada relación sodio/potasio en la dieta se asocia a su desarrollo"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 34,
    "question": "Un hombre de 65 años, tabaquista, dislipémico e hipertenso instala un síndrome coronario agudo con elevación del segmento ST mientras se encontraba en reposo. Indique el principal mecanismo fisiopatológico que considera responsable de la isquemia miocárdica:",
    "answer": "Ateromatosis de vasos epicárdicos",
    "options": [
      "Ateromatosis de vasos epicárdicos",
      "Ateromatosis de la microcirculación",
      "Disminución sistémica del aporte de oxígeno",
      "Aumento del consumo miocárdico de oxígeno"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 35,
    "question": "Un paciente se presenta taquicárdico, con hipotensión arterial, relleno capilar lento, depresión de conciencia y oliguria. El perfil hemodinámico evidencia disminución del gasto cardíaco, de la presión venosa central y de la saturación venosa central de oxígeno. ¿Cuál de las siguientes es la etiología más probable del shock?",
    "answer": "Hipovolémico por deshidratación",
    "options": [
      "Séptico secundario a neumonia",
      "Hipovolémico por deshidratación",
      "Cardiogénico por infarto agudo de miocardio",
      "Obstructivo por tromboembolismo pulmonar"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 36,
    "question": "Con respecto a la “cascada vasodilatadora” en la fisiopatología de la hipertensión endocraneana, marque la opción correcta en relación a la presión de perfusión cerebral (PP presión intracraneana (PIy volumen sanguíneo cerebral (VS",
    "answer": "La disminución de la PPC provoca vasodilatación con aumento del VSC y la PIC",
    "options": [
      "El aumento de PPC determina vasodilatación, aumento del VSC y la PIC",
      "El aumento de PPC provoca vasodilatación con reducción del VSC y la PIC",
      "La disminución de la PPC provoca vasodilatación con aumento del VSC y la PIC",
      "La disminución de la PPC determina vasodilatación con reducción del VSC y la PIC"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 37,
    "question": "¿Cuál de lassiguientes es una característica del shunt intrapulmonar como mecanismo de insuficiencia respiratoria?",
    "answer": "Se diferencia de la inhomogeneidad ventilación/perfusión (V/Q) a través del test dehiperoxia",
    "options": [
      "En condiciones normales el shunt debe ser cero",
      "Cursa con diferencia alvéolo-arterial de oxígeno normal",
      "La presencia de hipercapnia es un elemento necesario para su diagnóstico",
      "Se diferencia de la inhomogeneidad ventilación/perfusión (V/Q) a través del test dehiperoxia"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 38,
    "question": " ¿Qué patrón de mecánica ventilatoria espera encontrar en un paciente con enfermedad pulmonar obstructiva crónica predominantemente enfisematoso?",
    "answer": "Aumento de resistencias y disminución de elastancia",
    "options": [
      "Resistencias normales y elastancia aumentada",
      "Resistencias normales y complacencia aumentada",
      "Aumento de resistencias y disminución de elastancia",
      "Aumento de resistencias y disminución de complacencia"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 39,
    "question": "¿Cuál es la causa más frecuente de insuficiencia renal aguda?",
    "answer": "Pre-renal",
    "options": [
      "Pre-renal",
      "Obstructiva",
      "Parenquimatosa"
    ],
    "discipline": "Fisiopato",
  },
  {
    "numb": 40,
    "question": "Acerca de las 5 fases características de la injuria renal aguda parenquimatosa, marque la opción correcta:",
    "answer": "La “iniciación” corresponde a la primera de las fases",
    "options": [
      "La “iniciación” corresponde a la primera de las fases",
      "La fase de “extensión” se caracteriza por la persistencia de la hipoxia tisular",
      "En la fase de “mantenimiento” se completa el proceso de recuperación funcional",
      "La “vasoconstricción” es la fase final, caracterizada por un aumento de lasresistencia vasculares renales"
    ],
    "discipline": "Fisiopato",
    "comment": "Esta pregunta es ambigua. Son correctas A y B."

  },
  {
    "numb": 41,
    "question": "¿Cuál de las siguientes es una característica de la cinética de eliminación de primer orden?",
    "answer": "Se elimina del organismo un porcentaje constante de moléculas del fármaco por unidad de tiempo",
    "options": [
      "A mayor concentración plasmática del fármaco, mayor vida media",
      "Se observa a concentraciones plasmáticas muy elevadas en fármacos con metabolismo saturable",
      "Se elimina del organismo un porcentaje constante de moléculas del fármaco por unidad de tiempo"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 42,
    "question": "¿Para cuál de las siguientes situaciones clínicas es útil el anticonvusivante carbamazepina?",
    "answer": "Neuralgia del trigémino",
    "options": [
      "Esquizofrenia",
      "Neuralgia del trigémino",
      "Estado de mal convulsivo",
      "Episodio depresivo mayor",
      "Ansiedad generalizada con depresión"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 43,
    "question": "¿Cuál de las siguientes combinaciones de mecanismos de acción posee carvedilol?",
    "answer": "Antagonista beta1 y beta2 adrenérgico, y antagonista alfa1 adrenérgico",
    "options": [
      "Agonista alfa1 adrenérgico y antagonista dopaminérgico D2",
      "Agonista parcial beta1 adrenérgico con acción antimuscarínica",
      "Antagonista beta1 y beta2 adrenérgico, y antagonista alfa1 adrenérgico",
      "Antagonista selectivo beta1 adrenérgico y productor de óxido nítrico endotelial"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 44,
    "question": "¿Cuál de las siguientes es una característica farmacocinética de difenilhidantoína?",
    "answer": "Puede reducir el efecto de otros fármacos por su efecto inductor del citocromo p450 3A4",
    "options": [
      "Se absorbe poco pero rápidamente por vía oral",
      "Se une escasamente (menos del 30%) a las proteínas plasmáticas",
      "Carece de interacciones clínicamente relevantes con el alcohol etilico",
      "Disminuye la absorción de otros antiepilépticos al aumentar el pH gástrico",
      "Puede reducir el efecto de otros fármacos por su efecto inductor del citocromo p450 3A4"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 45,
    "question": "¿Cuál de lossiguientes mecanismos explica un importante efecto adverso de los antiinflamatorios no esteroideos?",
    "answer": "Inhiben la ciclooxigenasa 2, con efecto protrombótico",
    "options": [
      "Inhiben la ciclooxigenasa 2, con efecto protrombótico",
      "Inhiben la síntesis proteica reduciendo la masa muscular corporal",
      "Bloquean la fosfolipasa A2, lo cual puede producir resistencia a la insulina",
      "Bloquean la producción de ácido clorhídrico, que facilita lesiones digestivas"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 46,
    "question": "¿Cuál de los siguientes enunciados sobre las acciones farmacológicas de paracetamol es correcto?",
    "answer": "Es útil en cuadros infecciosos para el tratamiento sintomático de lafiebre",
    "options": [
      "Posee mayor potencia analgésica que codeína",
      "Su potencia antiinflamatoria es mayor que la de ketoprofeno",
      "Es útil en cuadros infecciosos para el tratamiento sintomático de lafiebre",
      "Tiene efecto antiagregante plaquetario, útil para prevención secundaria cardiovascular"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 47,
    "question": "Señale la afirmación correcta sobre las acciones farmacológicas del ácido acetilsalicílico: ",
    "answer": "El efecto antiinflamatorio se observa a dosis más altas que el analgésico, cercanas al rangotóxico",
    "options": [
      "El efecto antiagregante plaquetario se observa a dosis mayores que el antipirético",
      "El efecto analgésico en el adulto se obtiene con dosis de 100 mg/día por vía oral",
      "El efecto antiinflamatorio se observa a dosis más altas que el analgésico, cercanas al rangotóxico"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 48,
    "question": "¿Cuál de los siguientes es un efecto farmacológico característico de los analgésicos opioides?",
    "answer": "Miosis por contracción del músculo liso radial del iris",
    "options": [
      "Miosis por contracción del músculo liso radial del iris",
      "Diarrea crónica por aumento de la motilidad intestinal",
      "Excitación por estimulación del sistema nervioso central",
      "Hipertensión arterial por aumento de la resistencia vascular periférica"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 49,
    "question": "¿Cuál de las siguientes es una característica del efecto analgésico de morfina? ",
    "answer": "Reduce la percepción dolorosa y la experiencia emocional desagradable que acompaña aldolor",
    "options": [
      "Asocia un importante efecto antiinflamatorio a nivel visceral",
      "Carece de efecto sobre el nivel de conciencia, aún a dosis altas",
      "Es más eficaz para aliviar el dolor neuropático que para el de origen oncológico",
      "Reduce la percepción dolorosa y la experiencia emocional desagradable que acompaña aldolor",
      "Posee una curva dosis-respuesta plana, con bajo techo de efecto máximo, por tanto no tiene sentido aumentar la dosis más allá del doble de la minima eficaz"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 50,
    "question": "¿Cuál de los siguientes es un fármaco antagonista muscarínico utilizado por vía inhalatoria como broncodilatador de larga duración de acción?",
    "answer": "Tiotropio",
    "options": [
      "Tiotropio",
      "Ipratropio",
      "Salmeterol",
      "Formoterol",
      "Propinoxato"
    ],
    "discipline": "Farmaco",
  },
  {
    "numb": 51,
    "question": "La radiactividad esla propiedad que presentan ciertos elementos llamados radioisótopos de emitir radiaciones. Dado un radioisótopo que presenta una constante de desintegración λ, su período de semidesintegración T1/2 se puede calcular mediante la siguiente relación matemática:",
    "answer": "T1/2 = 0,693 x λ-1",
    "options": [
      "T1/2 = 0,693 x λ-1",
      "T1/2 = ln (1/2) x λ -1", 
      "T1/2 = - 0,693 x λ",
      "T1/2 = - ln (2) x λ"
    ],
    "discipline": "Biofisica",
  },
  {
    "numb": 52,
    "question": "La ley de Bergonie-Tribudeau establece que la radiosensibilidad es directamente proporcional a la actividad mitótica e inversamente proporcional al grado de diferenciación celular. De acuerdo con esta ley, ¿cuál de los siguientes tejidos se clasifica como más radiosensible? ",
    "answer": "Médula ósea",
    "options": [
      "Tejido óseo",
      "Médula ósea",
      "Tejido nervioso",
      "Tejido muscular"
    ],
    "discipline": "Biofisica",
  },
  {
    "numb": 53,
    "question": "Cuando se estudia la sensibilidad de las poblaciones celulares a las radiaciones ionizantes ¿Qué características presenta una población celular irradiada?",
    "answer": "Tiene menor capacidad de reparación de los daños si la tasa de dosis es mayor",
    "options": [
      "Tiene mayor capacidad de reparación en presencia de O2",
      "Presenta mayor sensibilidad durante la fase S (síntesis) del ciclo celular",
      "Tiene menor capacidad de reparación de los daños si la tasa de dosis es mayor",
      "Presenta más cantidad de daños biológicos si se divide la dosis en pequeñas fracciones"
    ],
    "discipline": "Biofisica",
  },
  {
    "numb": 54,
    "question": " El tubo de rayos X origina artificialmente rayos X de frenado y característicos. ¿Cuál de lossiguientes efectos ocurre en el mecanismo de generación de rayos X característicos? ",
    "answer": "Efecto fotoeléctrico",
    "options": [
      "Efecto Compton",
      "Efecto fotoeléctrico",
      "Formación de pares"
    ],
    "discipline": "Biofisica",
  },
  {
    "numb": 55,
    "question": "Con respecto a los efectos estocásticos y determinísticos de las radiaciones ionizantessobre la salud de las personas, señale la opción correcta.",
    "answer": "La probabilidad de ocurrencia de los efectos determinísticos es nula por debajo de la dosisumbral",
    "options": [
      "La probabilidad de ocurrencia de los efectos estocásticos es alta a dosis bajas",
      "La severidad del efecto estocástico depende linealmente de la dosis desencadenante",
      "La severidad del efecto determinístico es independiente de la dosis desencadenante del mismo",
      "La probabilidad de ocurrencia de los efectos determinísticos es nula por debajo de la dosisumbral"
    ],
    "discipline": "Biofisica",
  },
  {
    "numb": 56,
    "question": "¿Cuál de los siguientes hallazgos morfológicos caracterizan la hiperplasia?",
    "answer": "Aumento del número de células del tejido por proliferación celular",
    "options": [
      "Cambio de un tipo celular adulto por otro tipo de célula adulta",
      "Aumento del tamaño celular con aumento del tamaño del órgano",
      "Aumento del número de células del tejido por proliferación celular"
    ],
    "discipline": "AnatoP",
  },
  {
    "numb": 57,
    "question": "¿Con qué tipo de necrosis se corresponde el infarto del parénquima renal?",
    "answer": "Necrosis de coagulación",
    "options": [
      "Necrosis caseosa",
      "Necrosis de coagulación",
      "Necrosis de licuefacción"
    ],
    "discipline": "AnatoP",
  },
  {
    "numb": 58,
    "question": " ¿Cuál de las siguientes es una característica de la inflamación aguda?",
    "answer": "Una reacción compleja en el tejido conjuntivo vascularizado",
    "options": [
      "Una reacción específica para cada agente causal",
      "Una reacción compleja en el tejido conjuntivo vascularizado",
      "Un proceso que facilita la difusión del agente en el organismo"
    ],
    "discipline": "AnatoP",
  },
  {
    "numb": 59,
    "question": "Paciente de 52 años, con cólicos hepáticos a repetición durante el último año. El día del ingreso instala fiebre de 38 grados. Se realiza cirugía, extrayendo vesícula biliar para estudio anatomo patológico. El informe histológico describe: Vesícula con pared globalmente engrosada por fibrosis y exudados linfoplasmocitarios difusos y nodulares trasmurales. ¿A que corresponden estos hallazgosmorfológicos?",
    "answer": "Proceso inflamatorio crónico inespecífico",
    "options": [
      "Proceso inflamatorio agudo gangrenoso",
      "Proceso inflamatorio crónico inespecífico",
      "Proceso inflamatorio crónico granulomatoso"
    ],
    "discipline": "AnatoP",
  },
  {
    "numb": 60,
    "question": "Hombre de 40 años que consulta por disnea de esfuerzo, tos y fiebre vespertina de dos meses de evolución. Entre otros estudios se realiza biopsia pleural que informó: Secciones de pleura parietal, con múltiples colecciones organizadas de macrófagos, células gigantes multinucleadas y corona linfocitaria, con necrosis caseosa. ¿Cuál es el planteo diagnóstico?",
    "answer": "Pleuritis Crónica Tuberculosa",
    "options": [
      "Empiema Pleural",
      "Pleuritis Aguda Fibrinosa",
      "Pleuritis Crónica Tuberculosa"
    ],
    "discipline": "AnatoP",
  }
];