<script>
// FILE: hero-data.js

const heroDescriptions = {
    "motivator-connector": { title: "You're a Charmer!", type: "Motivator + Connector", description: "Your charisma and natural energy inspire and bring people together, making you a powerful force of connection.", power: "As a Hero, your words and artistry will weave magic, empowering your allies and disarming your foes with ease.", characters: ["Phil Dunphy (Modern Family)", "Tom Haverford (Parks & Rec)", "Buddy the Elf"] },
    "motivator-pioneer": { title: "You're a Maverick!", type: "Motivator + Pioneer", description: "You lead with bold ideas and courage, always challenging the status quo and rallying others around your vision.", power: "As a Hero, your fearless leadership will empower your team to confront any threat, leading them toward new horizons.", characters: ["Jack Donaghy (30 Rock)", "Tony Stark (Iron Man)", "Leslie Knope (Parks & Rec)"] },
    "motivator-steward": { title: "You're a Vanguard!", type: "Motivator + Steward", description: "Your dedication to excellence and achievement makes you a natural leader, always striving to bring your team to victory.", power: "As a Hero, your discipline and leadership will inspire your allies, guiding them through even the most challenging battles with confidence and honor.", characters: ["Ned Stark (Game of Thrones)", "Chris Traeger (Parks & Rec)", "Brienne of Tarth (Game of Thrones)"] },
    "analyst-connector": { title: "You're a Mystic!", type: "Analyst + Connector", description: "You have a deep intuition as to how people, ideas, and environments connect—harmonizing complex systems and bringing clarity to chaos.", power: "As a Hero, you'll tap into the forces of nature, shifting forms and altering the elements to create harmony and guide your allies through any challenge.", characters: ["Luna Lovegood (Harry Potter)", "Yoda (Star Wars)", "Spencer Reid (Criminal Minds)"] },
    "analyst-pioneer": { title: "You're a Rogue!", type: "Analyst + Pioneer", description: "You thrive on innovation and independence, always finding creative solutions and challenging norms.", power: "As a Hero, your creativity and agility will make you a master of analysis and infiltration, outsmarting your foes and uncovering hidden paths to victory.", characters: ["Sherlock Holmes", "Black Widow (Marvel)", "Tyrion Lannister (Game of Thrones)"] },
    "analyst-steward": { title: "You're a Magister!", type: "Analyst + Steward", description: "Your thirst for knowledge and clarity helps you master complex systems and make sense of the world around you.", power: "As a Hero, your intelligence will allow you to uncover arcane secrets and master powerful magic, shaping reality to secure your team's success.", characters: ["Chidi Anagonye (The Good Place)", "Ben Wyatt (Parks & Rec)", "Hermione Granger (Harry Potter)"] },
    "guardian-connector": { title: "You're a Saint!", type: "Guardian + Connector", description: "You naturally nurture and unite those around you, always striving to uplift your team and ensure everyone feels supported.", power: "As a Hero, you'll heal and protect your team, working miracles to help your allies overcome obstacles and perform at their best.", characters: ["Ann Perkins (Parks & Rec)", "Ted Lasso (Ted Lasso)", "Jessica Day (New Girl)"] },
    "guardian-pioneer": { title: "You're a Ranger!", type: "Guardian + Pioneer", description: "You are a natural explorer and protector, always leading your team into new challenges with a careful eye on potential risks.", power: "As a Hero, your keen senses and vast knowledge of the environment make you the ultimate scout, always one step ahead of unseen dangers and guiding your team to safety and success in uncharted territories.", characters: ["Aragorn (Lord of the Rings)", "Hagrid (Harry Potter)", "Katniss Everdeen (Hunger Games)"] },
    "guardian-steward": { title: "You're a Warden!", type: "Guardian + Steward", description: "You are an anchor of stability, embodying steadfast principles and ensuring order through your unshakeable resolve.", power: "As a Hero, your unwavering personal compass and commanding presence will allow you to enforce order and delegate for your team, serving as a beacon of integrity.", characters: ["Ron Swanson (Parks & Rec)", "Minerva McGonagall (Harry Potter)", "Mike Ehrmantraut (Breaking Bad)"] }
};

const domainDescriptions = {
    mountain: { title: "Your Domain is the Mountain", description: "You move fast and act boldly, helping teams gain momentum when they need it most. You lead through energy and conviction.", power: "On QuestWorks adventures, you can act decisively—even when it might be reckless—and help the team seize the moment." },
    island: { title: "Your Domain is the Island", description: "You're a deliberate thinker who brings calm, clarity, and long-range planning. You lead through insight and restraint.", power: "On QuestWorks adventures, you can reveal a hidden plan or contingency—something you prepared when no one else was looking ahead." },
    forest: { title: "Your Domain is the Forest", description: "You refine, adapt, and improve. You're hands-on, methodical, and committed to the craft of doing things right.", power: "On QuestWorks adventures, you can produce or upgrade a tool, technique, or system to help the team solve the problem better." },
    desert: { title: "Your Domain is the Desert", description: "You keep things simple, focused, and clear. You cut through the noise and see what others miss. You lead by seeing the truth.", power: "On QuestWorks adventures, you can call out what's not working and redirect the team before things go sideways." }
};

const questions = [
     { text: "You can usually find me…", options: [ { text: "Inspiring people", scores: { core: { motivator: 2 } } }, { text: "Seeking understanding", scores: { core: { analyst: 2 } } }, { text: "Protecting what I care about", scores: { core: { guardian: 2 } } } ] },
     { text: "I get most frustrated by…", options: [ { text: "Rules and expectations", scores: { secondary: { pioneer: 2 } } }, { text: "Inconsistencies", scores: { secondary: { steward: 2 } } }, { text: "Unnecessary conflicts", scores: { secondary: { connector: 2 } } } ] },
     { text: "Success to me means that I…", options: [ { text: "Rallied others toward a big goal", scores: { core: { motivator: 2 } } }, { text: 'Solved a complex problem', scores: { core: { analyst: 2 } } }, { text: "Ensured stability and safety despite turbulence", scores: { core: { guardian: 2 } } } ] },
     { text: "I want to be known primarily for my…", options: [ { text: "Profound compassion", scores: { secondary: { connector: 2 } } }, { text: "Unique perspective", scores: { secondary: { pioneer: 2 } } }, { text: "Unmatched excellence", scores: { secondary: { steward: 2 } } } ] },
     { text: "People are sometimes overwhelmed by my…", options: [ { text: "Enthusiasm", scores: { core: { motivator: 2 } } }, { text: "Depth", scores: { core: { analyst: 2 } } }, { text: "Concern", scores: { core: { guardian: 2 } } } ] },
     { text: "In meetings, I'm most likely to…", options: [ { text: "Build bridges and draw connections", scores: { secondary: { connector: 2 } } }, { text: "Challenge assumptions and push boundaries", scores: { secondary: { pioneer: 2 } } }, { text: "Keep things on track and organized", scores: { secondary: { steward: 2 } } } ] },
     { text: "On projects, I tend to focus on the…", options: [ { text: "Big picture", scores: { core: { motivator: 2 } } }, { text: "Hidden insights", scores: { core: { analyst: 2 } } }, { text: "Potential risks", scores: { core: { guardian: 2 } } } ] },
     { text: "People usually compliment my…", options: [ { text: "Perceptiveness", scores: { secondary: { connector: 2 } } }, { text: "Ingenuity", scores: { secondary: { pioneer: 2 } } }, { text: "Precision", scores: { secondary: { steward: 2 } } } ] },
     { text: "I am primarily driven by my…", options: [ { text: "Dreams and aspirations", scores: { core: { motivator: 2 } } }, { text: "Search for meaning", scores: { core: { analyst: 2 } } }, { text: "Sense of responsibility", scores: { core: { guardian: 2 } } } ] },
     { text: "Nothing matters if you can't…", options: [ { text: "Make an impact", scores: { core: { motivator: 2 } } }, { text: "Find the truth", scores: { core: { analyst: 2 } } }, { text: "Preserve well-being", scores: { core: { guardian: 2 } } } ] },
     { text: "My team most values my…", options: [ { text: "Broad vision", scores: { core: { motivator: 2 } } }, { text: "Critical eye", scores: { core: { analyst: 2 } } }, { text: "Steady presence", scores: { core: { guardian: 2 } } } ] },
     { text: "It's most easy for me to see...", options: [ { text: "How it all connects", scores: { secondary: { connector: 2 } } }, { text: "How things could be", scores: { secondary: { pioneer: 2 } } }, { text: "How things should be", scores: { secondary: { steward: 2 } } } ] },
     { text: "My arch nemesis is…", options: [ { text: "Misalignment", scores: { secondary: { connector: 2 } } }, { text: "Limitation", scores: { secondary: { pioneer: 2 } } }, { text: "Disorder", scores: { secondary: { steward: 2 } } } ] },
     { text: "My friends would describe me as…", options: [ { text: "Intuitive", scores: { secondary: { connector: 2 } } }, { text: "Curious", scores: { secondary: { pioneer: 2 } } }, { text: "Reliable", scores: { secondary: { steward: 2 } } } ] },
     { text: "I am most proud of my...", options: [ { text: "Sensitivity", scores: { secondary: { connector: 2 } } }, { text: "Courage", scores: { secondary: { pioneer: 2 } } }, { text: "Integrity", scores: { secondary: { steward: 2 } } } ] },
     { text: "I wish the world were more…", options: [ { text: "Interconnected", scores: { secondary: { connector: 2 } } }, { text: "Open minded", scores: { secondary: { pioneer: 2 } } }, { text: "Predictable", scores: { secondary: { steward: 2 } } } ] },
     { text: "I often struggle with…", options: [ { text: "Tempering my expectations", scores: { core: { motivator: 2 } } }, { text: "Overthinking", scores: { core: { analyst: 2 } } }, { text: "Letting go", scores: { core: { guardian: 2 } } } ] },
     { text: "I see the world as full of…", options: [ { text: "Ideas and exciting opportunities", scores: { core: { motivator: 2 } } }, { text: "Patterns and fascinating complexities", scores: { core: { analyst: 2 } } }, { text: "Vulnerabilties to safeguard", scores: { core: { guardian: 2 } } } ] },
     { text: "I wish people would…", options: [ { text: "Find more common ground", scores: { secondary: { connector: 2 } } }, { text: "Question more", scores: { secondary: { pioneer: 2 } } }, { text: "Hold higher standards", scores: { secondary: { steward: 2 } } } ] },
     { text: "I dread feeling…", options: [ { text: "Alone", scores: { secondary: { connector: 2 } } }, { text: "Misunderstood", scores: { secondary: { pioneer: 2 } } }, { text: "Out of control", scores: { secondary: { steward: 2 } } } ] },
     { text: "My deepest value is...", options: [ { text: "Love", scores: { secondary: { connector: 2 } } }, { text: "Freedom", scores: { secondary: { pioneer: 2 } } }, { text: "Justice", scores: { secondary: { steward: 2 } } } ] },
     { text: "My team trusts me to…", options: [ { text: "Take action", scores: { domain: { mountain: 2 } } }, { text: "Spot what's wrong", scores: { domain: { desert: 2 } } }, { text: "Plan thoroughly", scores: { domain: { island: 2 } } }, { text: "Improve our processes", scores: { domain: { forest: 2 } } } ] },
     { text: "I sometimes have difficulty with…", options: [ { text: "Foreseeing complications", scores: { domain: { mountain: 2 } } }, { text: "Embracing my creativity", scores: { domain: { desert: 2 } } }, { text: "Adapting to unpredictability", scores: { domain: { island: 2 } } }, { text: "Finishing projects", scores: { domain: { forest: 2 } } } ] },
     { text: "I'm primarily good at my job because of my…", options: [ { text: "Boldness", scores: { domain: { mountain: 2 } } }, { text: "Discernment", scores: { domain: { desert: 2 } } }, { text: "Foresight", scores: { domain: { island: 2 } } }, { text: "Cleverness", scores: { domain: { forest: 2 } } } ] }
];

const mbtiTypes = ["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"];

const discTypes = [
    "D (Dominance)", "I (Influence)", "S (Steadiness)", "C (Conscientiousness)",
    "DI", "IS", "SC", "CD"
];

const enneagramTypes = [
    "1 - The Reformer", "2 - The Helper", "3 - The Achiever", "4 - The Individualist",
    "5 - The Investigator", "6 - The Loyalist", "7 - The Enthusiast", "8 - The Challenger", "9 - The Peacemaker",
    "1w9", "1w2", "2w1", "2w3", "3w2", "3w4", "4w3", "4w5",
    "5w4", "5w6", "6w5", "6w7", "7w6", "7w8", "8w7", "8w9", "9w8", "9w1"
];

const cliftonStrengthsList = [
    "Achiever", "Activator", "Adaptability", "Analytical", "Arranger", "Belief", "Command", "Communication", "Competition", "Connectedness",
    "Consistency", "Context", "Deliberative", "Developer", "Discipline", "Empathy", "Focus", "Futuristic", "Harmony", "Ideation",
    "Includer", "Individualization", "Input", "Intellection", "Learner", "Maximizer", "Positivity", "Relator", "Responsibility", "Restorative",
    "Self-Assurance", "Significance", "Strategic", "Woo"
];

const importMappings = {
    mbti: {
        "ISTJ": ["guardian-steward", "island", "analyst-steward", "forest", "guardian-pioneer", "desert"], "ISFJ": ["guardian-connector", "forest", "guardian-steward", "island", "analyst-connector", "desert"], "INFJ": ["analyst-connector", "island", "guardian-connector", "forest", "motivator-connector", "desert"], "INTJ": ["analyst-steward", "island", "analyst-pioneer", "mountain", "motivator-steward", "desert"], "ISTP": ["analyst-pioneer", "forest", "guardian-pioneer", "mountain", "analyst-steward", "desert"], "ISFP": ["guardian-connector", "forest", "analyst-connector", "desert", "motivator-connector", "mountain"], "INFP": ["analyst-connector", "desert", "motivator-connector", "forest", "guardian-connector", "island"], "INTP": ["analyst-pioneer", "island", "analyst-steward", "desert", "motivator-pioneer", "forest"], "ESTP": ["motivator-pioneer", "mountain", "guardian-pioneer", "forest", "analyst-pioneer", "desert"], "ESFP": ["motivator-connector", "mountain", "guardian-connector", "forest", "motivator-pioneer", "desert"], "ENFP": ["motivator-pioneer", "mountain", "motivator-connector", "forest", "analyst-pioneer", "desert"], "ENTP": ["analyst-pioneer", "mountain", "motivator-pioneer", "island", "analyst-steward", "desert"], "ESTJ": ["guardian-steward", "mountain", "motivator-steward", "forest", "guardian-pioneer", "island"], "ESFJ": ["guardian-connector", "forest", "motivator-connector", "mountain", "guardian-steward", "island"], "ENFJ": ["motivator-connector", "mountain", "guardian-connector", "forest", "motivator-steward", "island"], "ENTJ": ["motivator-steward", "mountain", "analyst-steward", "island", "motivator-pioneer", "desert"]
    },
    disc: {
        "D (Dominance)": ["motivator-pioneer", "mountain", "motivator-steward", "desert", "guardian-pioneer", "forest"], "I (Influence)": ["motivator-connector", "mountain", "motivator-pioneer", "forest", "guardian-connector", "desert"], "S (Steadiness)": ["guardian-connector", "forest", "guardian-steward", "island", "analyst-connector", "desert"], "C (Conscientiousness)": ["analyst-steward", "island", "guardian-steward", "forest", "analyst-pioneer", "desert"],
        "DI": ["motivator-pioneer", "mountain", "motivator-connector", "mountain", "motivator-steward", "desert"], "IS": ["motivator-connector", "forest", "guardian-connector", "forest", "motivator-pioneer", "mountain"], "SC": ["guardian-connector", "forest", "guardian-steward", "island", "analyst-steward", "forest"], "CD": ["analyst-steward", "island", "guardian-steward", "desert", "motivator-steward", "mountain"]
    },
    enneagram: {
        "1 - The Reformer": ["guardian-steward", "island", "analyst-steward", "forest", "motivator-steward", "desert"], "2 - The Helper": ["guardian-connector", "forest", "motivator-connector", "mountain", "analyst-connector", "island"], "3 - The Achiever": ["motivator-steward", "mountain", "motivator-pioneer", "forest", "guardian-steward", "desert"], "4 - The Individualist": ["analyst-connector", "desert", "motivator-pioneer", "island", "analyst-pioneer", "forest"], "5 - The Investigator": ["analyst-steward", "island", "analyst-pioneer", "desert", "guardian-steward", "forest"], "6 - The Loyalist": ["guardian-pioneer", "island", "guardian-steward", "forest", "analyst-steward", "desert"], "7 - The Enthusiast": ["motivator-pioneer", "mountain", "motivator-connector", "forest", "analyst-pioneer", "desert"], "8 - The Challenger": ["motivator-pioneer", "mountain", "guardian-pioneer", "desert", "motivator-steward", "forest"], "9 - The Peacemaker": ["guardian-connector", "forest", "analyst-connector", "island", "motivator-connector", "desert"],
        "1w9": ["guardian-steward", "island", "guardian-connector", "island", "analyst-steward", "forest"], "1w2": ["guardian-steward", "forest", "guardian-connector", "forest", "motivator-steward", "island"], "2w1": ["guardian-connector", "forest", "guardian-steward", "forest", "motivator-connector", "island"], "2w3": ["motivator-connector", "mountain", "guardian-connector", "forest", "motivator-steward", "mountain"], "3w2": ["motivator-steward", "mountain", "motivator-connector", "mountain", "guardian-connector", "forest"], "3w4": ["motivator-steward", "desert", "motivator-pioneer", "desert", "analyst-connector", "forest"], "4w3": ["analyst-steward", "desert", "analyst-connector", "forest", "motivator-pioneer", "mountain"], "4w5": ["analyst-connector", "island", "analyst-steward", "island", "guardian-connector", "desert"], "5w4": ["analyst-steward", "island", "analyst-connector", "desert", "analyst-pioneer", "island"], "5w6": ["analyst-steward", "island", "guardian-pioneer", "island", "guardian-steward", "forest"], "6w5": ["analyst-steward", "island", "guardian-pioneer", "island", "analyst-pioneer", "desert"], "6w7": ["guardian-pioneer", "mountain", "motivator-pioneer", "mountain", "guardian-connector", "forest"], "7w6": ["motivator-pioneer", "mountain", "guardian-pioneer", "forest", "motivator-connector", "mountain"], "7w8": ["motivator-pioneer", "mountain", "motivator-steward", "mountain", "analyst-pioneer", "desert"], "8w7": ["motivator-pioneer", "mountain", "motivator-connector", "mountain", "guardian-pioneer", "desert"], "8w9": ["guardian-pioneer", "mountain", "motivator-pioneer", "mountain", "guardian-steward", "island"], "9w8": ["guardian-connector", "mountain", "guardian-pioneer", "forest", "motivator-connector", "mountain"], "9w1": ["guardian-connector", "island", "guardian-steward", "island", "analyst-connector", "forest"]
    },
    clifton: {
         "Achiever": ["motivator", "steward", "mountain"], "Activator": ["motivator", "pioneer", "mountain"], "Adaptability": ["guardian", "connector", "forest"], "Analytical": ["analyst", "steward", "island"], "Arranger": ["analyst", "steward", "forest"], "Belief": ["guardian", "steward", "island"], "Command": ["motivator", "steward", "mountain"], "Communication": ["motivator", "connector", "mountain"], "Competition": ["motivator", "pioneer", "mountain"], "Connectedness": ["analyst", "connector", "desert"], "Consistency": ["guardian", "steward", "forest"], "Context": ["analyst", "steward", "island"], "Deliberative": ["guardian", "steward", "island"], "Developer": ["guardian", "connector", "forest"], "Discipline": ["guardian", "steward", "forest"], "Empathy": ["guardian", "connector", "forest"], "Focus": ["motivator", "steward", "desert"], "Futuristic": ["motivator", "pioneer", "mountain"], "Harmony": ["guardian", "connector", "forest"], "Ideation": ["analyst", "pioneer", "mountain"], "Includer": ["guardian", "connector", "forest"], "Individualization": ["analyst", "connector", "desert"], "Input": ["analyst", "steward", "island"], "Intellection": ["analyst", "steward", "island"], "Learner": ["analyst", "pioneer", "forest"], "Maximizer": ["motivator", "steward", "forest"], "Positivity": ["motivator", "connector", "mountain"], "Relator": ["guardian", "connector", "island"], "Responsibility": ["guardian", "steward", "island"], "Restorative": ["analyst", "pioneer", "desert"], "Self-Assurance": ["motivator", "pioneer", "mountain"], "Significance": ["motivator", "pioneer", "mountain"], "Strategic": ["analyst", "pioneer", "island"], "Woo": ["motivator", "connector", "mountain"]
     }
};

// --- End of hero-data.js ---
</script>

<script>
// FILE: hero-quiz.js

class HeroQuiz {
    constructor(app) {
        this.app = app;
        this.currentQuestion = 0;
        // Initial scores structure - actual values calculated during quiz
        this.scores = { core: {}, secondary: {}, domain: {} };
        this.quizElement = document.getElementById('quiz');
        this.questionTextElement = this.quizElement.querySelector('.question-text');
        this.optionsElement = this.quizElement.querySelector('.options');
        this.progressBarElement = this.quizElement.querySelector('.progress-bar');
        this.progressTextElement = this.quizElement.querySelector('.progress-text');
        this.backButton = document.getElementById('backButton');
        this.userAnswers = [];
        // IMPORTANT: 'questions' const must be defined/loaded before this class is used.
        this.shuffledQuestions = this.shuffleArray([...questions]); // Assumes 'questions' is global
        this.goBackBound = this.goBack.bind(this); // Bind context once for the listener
    }

    initQuiz() {
        this.currentQuestion = 0;
        // Reset scores structure based on available types in descriptions (more robust)
        this.scores = {
             core: Object.keys(heroDescriptions).reduce((acc, key) => { acc[key.split('-')[0]] = 0; return acc; }, {}),
             secondary: Object.keys(heroDescriptions).reduce((acc, key) => { acc[key.split('-')[1]] = 0; return acc; }, {}),
             domain: Object.keys(domainDescriptions).reduce((acc, key) => { acc[key] = 0; return acc; }, {})
        };

        // Ensure all score types are initialized to 0 even if not present in descriptions initially
        ['motivator', 'analyst', 'guardian'].forEach(k => this.scores.core[k] = this.scores.core[k] || 0);
        ['connector', 'pioneer', 'steward'].forEach(k => this.scores.secondary[k] = this.scores.secondary[k] || 0);
        ['mountain', 'island', 'forest', 'desert'].forEach(k => this.scores.domain[k] = this.scores.domain[k] || 0);


        this.userAnswers = new Array(this.shuffledQuestions.length).fill(undefined);
        this.shuffledQuestions = this.shuffleArray([...questions]); // Reshuffle is good practice

        this.backButton.removeEventListener('click', this.goBackBound); // Remove previous if exists
        this.backButton.addEventListener('click', this.goBackBound);

        this.backButton.disabled = true;
        this.showQuestion();
        this.updateProgress();
    }


    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    showQuestion() {
        if (this.currentQuestion < 0) this.currentQuestion = 0;
        if (this.currentQuestion >= this.shuffledQuestions.length) {
             console.error("Attempted to show question beyond quiz length.");
             // Recalculate one last time before completing
             this.recalculateScores();
             this.app.quizComplete(this.scores);
             return;
        }

        const questionData = this.shuffledQuestions[this.currentQuestion];
        this.questionTextElement.textContent = questionData.text;
        this.optionsElement.innerHTML = '';

         const shuffledOptions = this.shuffleArray([...questionData.options]);
         // Storing shuffled options on the question object itself isn't strictly necessary here
         // questionData.shuffledOptions = shuffledOptions;

        shuffledOptions.forEach((option) => { // No need for index here
            const button = document.createElement('button');
            button.className = 'option-button';
            button.textContent = option.text.charAt(0).toUpperCase() + option.text.slice(1);
            // Ensure scores object exists before stringifying
            button.dataset.scores = JSON.stringify(option.scores || {});
            const handleAnswerBound = this.handleAnswer.bind(this); // Bind context
            button.addEventListener('click', () => handleAnswerBound(button)); // Pass the button element
            this.optionsElement.appendChild(button);
        });

        // Re-select previous answer if navigating back
        if (this.userAnswers[this.currentQuestion] !== undefined) {
            try {
                // Safely compare scores
                const previousScoresString = JSON.stringify(this.userAnswers[this.currentQuestion].scores || {});
                const selectedButton = Array.from(this.optionsElement.children).find(
                    button => button.dataset.scores === previousScoresString
                );
                if (selectedButton) {
                    selectedButton.classList.add('selected');
                }
            } catch (e) {
                 console.error("Error applying previous selection state:", e);
            }
        }

        this.backButton.disabled = this.currentQuestion === 0;
        this.updateProgress();
    }


    handleAnswer(selectedButton) {
        const buttons = this.optionsElement.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.classList.remove('selected');
            button.disabled = true; // Disable all buttons briefly
        });

        selectedButton.classList.add('selected');
        try {
             const scores = JSON.parse(selectedButton.dataset.scores || '{}');
             // Store the answer *object* for recalculation
             this.userAnswers[this.currentQuestion] = { scores: scores };
        } catch (e) {
             console.error("Error parsing scores from button:", e, selectedButton.dataset.scores);
             // Decide how to handle error - maybe skip score update for this question?
             this.userAnswers[this.currentQuestion] = { scores: {} }; // Store empty scores on error
        }


        // Debounce the next step slightly
        setTimeout(() => {
            buttons.forEach(button => button.disabled = false); // Re-enable buttons
            this.goNext();
        }, 250); // Short delay
    }

    recalculateScores() {
        // Reset scores cleanly using the structure derived in initQuiz
         this.scores = {
             core: Object.keys(heroDescriptions).reduce((acc, key) => { acc[key.split('-')[0]] = 0; return acc; }, {}),
             secondary: Object.keys(heroDescriptions).reduce((acc, key) => { acc[key.split('-')[1]] = 0; return acc; }, {}),
             domain: Object.keys(domainDescriptions).reduce((acc, key) => { acc[key] = 0; return acc; }, {})
        };
        // Ensure base types exist
        ['motivator', 'analyst', 'guardian'].forEach(k => this.scores.core[k] = this.scores.core[k] || 0);
        ['connector', 'pioneer', 'steward'].forEach(k => this.scores.secondary[k] = this.scores.secondary[k] || 0);
        ['mountain', 'island', 'forest', 'desert'].forEach(k => this.scores.domain[k] = this.scores.domain[k] || 0);

        // Iterate through *all stored answers* and apply their scores
        for (let i = 0; i < this.userAnswers.length; i++) {
            if (this.userAnswers[i] && this.userAnswers[i].scores) {
                this.addScores(this.userAnswers[i].scores);
            }
        }
    }


    addScores(scoresToAdd) {
        if (!scoresToAdd) return; // Guard against null/undefined scores

        Object.entries(scoresToAdd).forEach(([category, categoryScores]) => {
            // Ensure the category exists in our scores object
            if (this.scores[category]) {
                Object.entries(categoryScores).forEach(([type, score]) => {
                    // Ensure the type exists and add the score
                    if (this.scores[category].hasOwnProperty(type)) {
                        this.scores[category][type] += score;
                    } else {
                        // Optionally log if a score type from data doesn't match expected structure
                        // console.warn(`Score type ${type} in category ${category} not found in score structure.`);
                    }
                });
            } else {
                 // console.warn(`Score category ${category} not found.`);
            }
        });
    }

    updateProgress() {
        const answeredCount = this.userAnswers.filter(ans => ans !== undefined).length;
        const progress = this.shuffledQuestions.length > 0 ? (answeredCount / this.shuffledQuestions.length) * 100 : 0;
        this.progressBarElement.style.width = `${progress}%`;
        this.progressTextElement.textContent = `Question ${this.currentQuestion + 1} of ${this.shuffledQuestions.length}`;
    }

    goBack() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            // No recalculation needed here, just show the previous state.
            // Recalculation happens if the user changes the answer on the previous screen,
            // or when they eventually click 'goNext'.
            this.showQuestion();
        }
    }

    goNext() {
        // It's crucial to recalculate scores *after* the user has potentially answered the current question
        // and *before* moving to the next question or finishing.
        this.recalculateScores();

        this.currentQuestion++;

        if (this.currentQuestion >= this.shuffledQuestions.length) {
            // Quiz finished, notify the main app
            this.app.quizComplete(this.scores);
        } else {
            // Show the next question
            this.showQuestion();
        }
    }
}

// --- End of hero-quiz.js ---
</script>
<script>// FILE: hero-app.js

// FILE: hero-app.js (Updated with robust Select2 init)

class HeroApp {
    constructor() {
        // UI Elements
        this.introScreen = document.getElementById('introScreen');
        this.importScreen = document.getElementById('importScreen');
        this.quizScreen = document.getElementById('quiz');
        this.resultScreen = document.getElementById('result');
        this.container = document.querySelector('.container');

        // Intro Screen Buttons
        this.startQuizButton = document.getElementById('startQuizButton');
        this.startImportButton = document.getElementById('startImportButton');

        // Import Screen Elements
        this.assessmentSystemSelect = document.getElementById('assessmentSystem');
        this.typeSelectorContainer = document.getElementById('typeSelectorContainer');
        this.mapResultButton = document.getElementById('mapResultButton');
        this.backToIntroButton = document.getElementById('backToIntroButton');

        // Quiz Elements - Instance created in startQuiz
        this.quiz = null;

        // Result State
        this.currentResults = []; // Array of {heroType: string, domain: string}
        this.resultIndex = 0;
        this.isImportResult = false;
        this.importedSystem = ''; // Track source

        // Chart Instance
        this.scoreChartInstance = null; // To properly destroy previous charts

        this.bindEvents();
        this.showScreen('intro'); // Start at intro
    }

    bindEvents() {
        this.startQuizButton.addEventListener('click', () => this.startQuiz());
        this.startImportButton.addEventListener('click', () => this.showScreen('import'));
        this.backToIntroButton.addEventListener('click', () => this.showScreen('intro'));
        this.assessmentSystemSelect.addEventListener('change', (e) => this.updateTypeSelector(e.target.value));
        this.mapResultButton.addEventListener('click', () => this.processImportSelection());
        // Result button listeners are added dynamically via onclick in displayResult
    }

    showScreen(screenName) {
        this.introScreen.style.display = 'none';
        this.importScreen.style.display = 'none';
        this.quizScreen.style.display = 'none';
        this.resultScreen.style.display = 'none';

        let targetScreen;
        switch (screenName) {
            case 'intro': targetScreen = this.introScreen; this.resetImportScreen(); break;
            case 'import': targetScreen = this.importScreen; break;
            case 'quiz': targetScreen = this.quizScreen; break;
            case 'result': targetScreen = this.resultScreen; break;
            default: targetScreen = this.introScreen; // Fallback
        }

        if (targetScreen) {
            targetScreen.style.display = 'block';
             setTimeout(() => {
                 this.container.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }, 50);
        }
    }

    resetImportScreen() {
         this.assessmentSystemSelect.value = "";
         this.typeSelectorContainer.innerHTML = "";
         this.mapResultButton.style.display = "none";
         this.importedSystem = '';
         // Attempt to destroy Select2 instance if it exists and jQuery is loaded
         if (typeof $ !== 'undefined' && $.fn.select2 && $('#typeSelect').data('select2')) {
             try {
                $('#typeSelect').select2('destroy');
             } catch (e) {
                 console.warn("Minor error destroying previous Select2 instance:", e);
             }
         }
    }

    startQuiz() {
         this.isImportResult = false;
         this.importedSystem = 'HeroType Quiz';
        if (!this.quiz) {
            // Assumes HeroQuiz class is globally available from hero-quiz.js
            this.quiz = new HeroQuiz(this);
        }
        this.showScreen('quiz');
        this.quiz.initQuiz();
    }

    quizComplete(scores) {
        this.isImportResult = false;
        this.importedSystem = 'HeroType Quiz';
        if (!scores || typeof scores !== 'object') {
             console.error("Quiz completed with invalid scores object:", scores);
             this.resultScreen.innerHTML = `<p>An error occurred calculating results.</p><button class="result-button retake" onclick="window.heroApp.showScreen('intro')">Start Over</button>`;
             this.showScreen('result');
             return;
         }
        const calculatedResults = this.calculateQuizResults(scores);
        this.currentResults = calculatedResults;
        this.resultIndex = 0;
        this.displayResult();
    }

    calculateQuizResults(scores) {
         if (typeof heroDescriptions === 'undefined' || typeof domainDescriptions === 'undefined') {
             console.error("Cannot calculate quiz results: Description data not loaded."); return [];
         }
         if (!scores.core || !scores.secondary || !scores.domain) {
             console.error("Invalid scores structure passed to calculateQuizResults:", scores); return [];
         }
         const heroTypes = Object.keys(heroDescriptions);
         const heroScores = heroTypes.map(type => {
             const [core, secondary] = type.split('-');
             const coreScore = scores.core[core] ?? 0;
             const secondaryScore = scores.secondary[secondary] ?? 0;
             return { type, totalScore: coreScore + secondaryScore };
         });
         heroScores.sort((a, b) => b.totalScore - a.totalScore);
         const domainScores = scores.domain;
         const sortedDomains = Object.entries(domainScores)
            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
            .map(([domain]) => domain);
         const results = [];
         for (let i = 0; i < Math.min(3, heroScores.length); i++) {
             const heroType = heroScores[i].type;
             const domain = sortedDomains[i % sortedDomains.length];
             if (heroDescriptions[heroType] && domainDescriptions[domain]) {
                results.push({ heroType: heroType, domain: domain });
             }
         }
         if (results.length === 0 && heroScores.length > 0) {
             const firstValidHero = heroScores.find(h => heroDescriptions[h.type]);
             const firstValidDomain = sortedDomains.find(d => domainDescriptions[d]);
             if (firstValidHero && firstValidDomain) {
                results.push({ heroType: firstValidHero.type, domain: firstValidDomain });
             }
         }
         return results;
    }

    // --- UPDATED updateTypeSelector ---
    updateTypeSelector(system) {
        if (typeof mbtiTypes === 'undefined' || typeof discTypes === 'undefined' || typeof enneagramTypes === 'undefined' || typeof cliftonStrengthsList === 'undefined') {
            console.error("Cannot update type selector: Type list data not loaded.");
            this.typeSelectorContainer.innerHTML = '<p style="color: red;">Error: Assessment data failed to load.</p>';
            return;
        }

        // Clear previous content and reset button/system
        this.typeSelectorContainer.innerHTML = '';
        this.mapResultButton.style.display = 'none';
        this.importedSystem = system;
        let html = '';
        let optionsArray = [];
        const selectId = 'typeSelect'; // Use a constant ID
        let placeholder = '';

        if (!system) return;

        // Start building the section HTML
        html = `<div class="import-section"><label for="${selectId}">2. Select Your Type/Strengths:</label>`;

        // Determine options and placeholder based on system
        switch (system) {
            case 'mbti': optionsArray = mbtiTypes; placeholder = '-- Select MBTI Type --'; break;
            case 'disc': optionsArray = discTypes; placeholder = '-- Select DISC Style --'; break;
            case 'enneagram': optionsArray = enneagramTypes; placeholder = '-- Select Enneagram Type --'; break;
            case 'clifton': optionsArray = cliftonStrengthsList; placeholder = 'Select Top 5 Strengths'; break;
            default: console.warn("Unknown assessment system:", system); return;
        }

        // Build the select element HTML
        if (system === 'clifton') {
            html += `<p style="font-size:0.9em; color: #666; margin-bottom: 10px;">Select your Top 5 CliftonStrengths themes:</p>`;
            html += `<select id="${selectId}" multiple="multiple" style="width: 100%;">`;
            optionsArray.forEach(opt => html += `<option value="${opt}">${opt}</option>`);
            html += `</select>`;
        } else {
            html += `<select id="${selectId}">`;
            html += `<option value="">${placeholder}</option>`;
            optionsArray.forEach(opt => html += `<option value="${opt}">${opt}</option>`);
            html += `</select>`;
        }
        html += `</div>`; // Close import-section div

        // Add the generated HTML to the DOM *FIRST*
        this.typeSelectorContainer.innerHTML = html;

        // --- Initialize Select2 or add listeners *AFTER* HTML is in DOM ---
        if (system === 'clifton') {
            // Add a small delay to ensure DOM is fully ready for Select2
            setTimeout(() => {
                const selectElement = $(`#${selectId}`); // Use jQuery selector
                 // Check if jQuery and Select2 plugin are available *NOW*
                if (typeof $ !== 'undefined' && $.fn.select2) {
                    try {
                        // Initialize Select2
                        selectElement.select2({
                            placeholder: placeholder,
                            maximumSelectionLength: 5,
                            closeOnSelect: false
                        });

                        // Attach change listener to the Select2 element
                        selectElement.on('change', () => {
                            const selectedCount = selectElement.select2('data').length;
                            this.mapResultButton.style.display = selectedCount === 5 ? 'block' : 'none';
                        });

                         // Remove any previous error message if initialization succeeds
                         const errorP = this.typeSelectorContainer.querySelector('p.init-error');
                         if (errorP) errorP.remove();

                    } catch (e) {
                        // Catch errors specifically during .select2() execution
                        console.error("Error *during* Select2 initialization:", e);
                        if (!this.typeSelectorContainer.querySelector('p.init-error')) {
                           this.typeSelectorContainer.innerHTML += '<p class="init-error" style="color: red;">Error initializing interactive dropdown component.</p>';
                        }
                    }
                } else {
                    // Libraries not loaded correctly
                    console.error("jQuery or $.fn.select2 not available when trying to initialize for Clifton.");
                    if (!this.typeSelectorContainer.querySelector('p.init-error')) {
                      this.typeSelectorContainer.innerHTML += '<p class="init-error" style="color: red;">Error: Required dropdown library not loaded correctly.</p>';
                    }
                }
            }, 50); // 50ms delay - adjust if needed, but usually sufficient

        } else { // For non-Clifton dropdowns
            const typeSelectElement = document.getElementById(selectId);
            if (typeSelectElement) {
                typeSelectElement.addEventListener('change', (e) => {
                    this.mapResultButton.style.display = e.target.value ? 'block' : 'none';
                });
            }
        }
    }
    // --- END of UPDATED updateTypeSelector ---

    processImportSelection() {
        const system = this.assessmentSystemSelect.value;
        let selectedValue;
        let mappedResultData;
         this.importedSystem = system;

         if (typeof importMappings === 'undefined') {
             console.error("Cannot process import: Mapping data not loaded.");
             alert("An error occurred loading assessment mappings. Please try again later."); return;
         }

        if (system === 'clifton') {
            if (typeof $ !== 'undefined' && $(`#${selectId}`).data('select2')) { // Check Select2 again before getting value
                selectedValue = $('#typeSelect').val();
            } else {
                 console.error("Clifton Select2 not ready for value retrieval.");
                 alert("Dropdown error. Please re-select the assessment system or try again."); return;
            }
            if (!selectedValue || selectedValue.length !== 5) {
                alert("Please select exactly 5 CliftonStrengths themes."); return;
            }
             mappedResultData = this.mapCliftonStrengths(selectedValue);
        } else {
            const typeSelectElement = document.getElementById('typeSelect');
            selectedValue = typeSelectElement ? typeSelectElement.value : null;
             if (!selectedValue) {
                alert("Please select your type."); return;
             }
             mappedResultData = importMappings[system]?.[selectedValue];
        }

        if (mappedResultData && mappedResultData.length >= 2) {
            this.isImportResult = true;
            this.currentResults = [];
            for (let i = 0; i < mappedResultData.length; i += 2) {
                const heroType = mappedResultData[i];
                const domain = mappedResultData[i+1];
                if (heroType && domain && heroDescriptions[heroType] && domainDescriptions[domain]) {
                    this.currentResults.push({ heroType, domain });
                } else {
                     console.warn(`Invalid mapping pair found: Type=${heroType}, Domain=${domain}. Skipping.`);
                }
            }
             if (this.currentResults.length === 0) {
                 alert("The selected type resulted in an invalid mapping. Please check the data or try another type.");
                 console.error("Mapping produced no valid HeroType/Domain pairs for:", system, selectedValue, mappedResultData); return;
             }
            this.resultIndex = 0;
            this.displayResult();
        } else {
            alert(`Could not find a mapping for the selected ${system.toUpperCase()} type "${selectedValue}". Please ensure it's selected correctly or contact support.`);
            console.error("Mapping lookup failed for:", system, selectedValue, "Resulting data:", mappedResultData);
        }
    }

     mapCliftonStrengths(top5) {
         if (typeof importMappings === 'undefined' || !importMappings.clifton) {
             console.error("Cannot map CliftonStrengths: Mapping data not loaded."); return [];
         }
        let coreScores = { motivator: 0, analyst: 0, guardian: 0 };
        let secondaryScores = { connector: 0, pioneer: 0, steward: 0 };
        let domainScores = { mountain: 0, island: 0, forest: 0, desert: 0 };
        top5.forEach(strength => {
            const affinities = importMappings.clifton[strength];
            if (affinities) {
                if (affinities[0] && coreScores.hasOwnProperty(affinities[0])) coreScores[affinities[0]]++;
                if (affinities[1] && secondaryScores.hasOwnProperty(affinities[1])) secondaryScores[affinities[1]]++;
                if (affinities[2] && domainScores.hasOwnProperty(affinities[2])) domainScores[affinities[2]]++;
            }
        });
        const combinedScores = [];
        Object.keys(coreScores).forEach(core => {
            Object.keys(secondaryScores).forEach(secondary => {
                const type = `${core}-${secondary}`;
                if (heroDescriptions[type]) {
                    combinedScores.push({ type: type, score: coreScores[core] + secondaryScores[secondary] });
                }
            });
        });
        if (combinedScores.length === 0) {
             console.warn("Clifton mapping produced no valid combined HeroType scores."); return [];
        }
        combinedScores.sort((a, b) => b.score - a.score);
         const sortedDomains = Object.entries(domainScores)
            .sort(([, scoreA], [, scoreB]) => scoreB - scoreA)
            .map(([domain]) => domain);
         const results = [];
         for (let i = 0; i < Math.min(3, combinedScores.length); i++) {
             const heroType = combinedScores[i].type;
             const domain = sortedDomains[i % sortedDomains.length];
             if (domainDescriptions[domain]) {
                results.push(heroType);
                results.push(domain);
             } else {
                 if (sortedDomains.length > (i % sortedDomains.length) + 1 && domainDescriptions[sortedDomains[(i % sortedDomains.length) + 1]]) {
                    results.push(heroType);
                    results.push(sortedDomains[(i % sortedDomains.length) + 1]);
                 } else { console.warn(`Could not find valid domain pairing for ${heroType}`); }
             }
         }
         if (results.length === 0 && combinedScores.length > 0) {
             const firstValidHeroType = combinedScores[0].type;
             const firstValidDomain = sortedDomains.find(d => domainDescriptions[d]);
             if (firstValidHeroType && firstValidDomain) {
                results.push(firstValidHeroType);
                results.push(firstValidDomain);
             }
         }
         return results;
     }

    displayResult() {
        if (!this.currentResults || this.currentResults.length === 0 || this.resultIndex >= this.currentResults.length || !this.currentResults[this.resultIndex]) {
             this.resultScreen.innerHTML = `<p>Error: Could not determine result.</p><button class="result-button retake" onclick="window.heroApp.showScreen('intro')">Start Over</button>`;
             this.showScreen('result'); console.error("DisplayResult error: Invalid currentResults or resultIndex.", { results: this.currentResults, index: this.resultIndex }); return;
        }
        const current = this.currentResults[this.resultIndex];
        const heroType = current.heroType; const domain = current.domain;
         if (typeof heroDescriptions === 'undefined' || typeof domainDescriptions === 'undefined') {
             console.error("Cannot display results: Description data not loaded."); this.resultScreen.innerHTML = `<p>Error loading result descriptions.</p><button class="result-button retake" onclick="window.heroApp.showScreen('intro')">Start Over</button>`; this.showScreen('result'); return;
         }
        const heroDesc = heroDescriptions[heroType]; const domainDesc = domainDescriptions[domain];
        if (!heroDesc || !domainDesc) {
            console.error("Missing description data for HeroType:", heroType, "or Domain:", domain); this.resultScreen.innerHTML = `<p>Error: Result data missing for ${heroType}/${domain}.</p><button class="result-button retake" onclick="window.heroApp.showScreen('intro')">Start Over</button>`; this.showScreen('result'); return;
        }
        const characterListHTML = (heroDesc.characters || []).map(char => `<li>${char}</li>`).join('');
        const canGoPrevious = this.resultIndex > 0; const canGoNext = this.resultIndex < this.currentResults.length - 1;
        const sourceText = this.importedSystem ? `Result based on ${this.isImportResult ? 'imported ' + this.importedSystem.toUpperCase() : this.importedSystem}.` : 'Result generated.';
         let html = `<h1>${heroDesc.title}</h1><p style="text-align: center;"><strong>${heroDesc.type}</strong></p><p>${heroDesc.description}</p><p><strong>Power:</strong> ${heroDesc.power}</p><h2>You're a lot like...</h2><ul class="character-list">${characterListHTML}</ul><h2>Domain</h2><p><strong>${domainDesc.title}</strong></p><p>${domainDesc.description}</p><p><strong>Power:</strong> ${domainDesc.power}</p>`;
        if (!this.isImportResult) { html += `<div class="chart-container"><canvas id="scoreChart"></canvas></div>`; }
         html += `<p style="text-align:center; font-style:italic; color:#666; margin-top:20px;">${sourceText}</p>`;
         html += `<div class="result-navigation"><p>Not quite right? Try the next best match or start over.</p><button class="result-button previous" onclick="window.heroApp.previousResult()" ${!canGoPrevious ? 'disabled' : ''}>Previous Result</button><button class="result-button" onclick="window.heroApp.nextResult()" ${!canGoNext ? 'disabled' : ''}>Next Best Result</button><button class="result-button retake" onclick="window.heroApp.showScreen('intro')">Start Over</button>${!canGoNext ? '<p class="no-more-results">No further results available.</p>' : ''}</div>`;
        this.resultScreen.innerHTML = html;
        this.showScreen('result');
        if (!this.isImportResult && this.quiz && this.quiz.scores) {
             setTimeout(() => { this.initializeChart(this.quiz.scores); }, 100);
        }
    }

    nextResult() {
        if (this.resultIndex < this.currentResults.length - 1) { this.resultIndex++; this.displayResult(); }
    }

    previousResult() {
        if (this.resultIndex > 0) { this.resultIndex--; this.displayResult(); }
    }

    initializeChart(scores) {
        if (typeof Chart === 'undefined') { console.error("Chart.js not loaded."); return; }
        const chartElement = document.getElementById('scoreChart');
        if (!chartElement) { return; }
        const ctx = chartElement.getContext('2d');
        if (!scores || !scores.core || !scores.secondary) { console.error("Invalid scores for chart:", scores); return; }
        const traitLabels = ['Motivator', 'Analyst', 'Guardian', 'Connector', 'Pioneer', 'Steward'];
        const traitScores = [scores.core.motivator ?? 0, scores.core.analyst ?? 0, scores.core.guardian ?? 0, scores.secondary.connector ?? 0, scores.secondary.pioneer ?? 0, scores.secondary.steward ?? 0];
        if (this.scoreChartInstance) { this.scoreChartInstance.destroy(); this.scoreChartInstance = null; }
        try {
             this.scoreChartInstance = new Chart(ctx, {
                 type: 'bar',
                 data: { labels: traitLabels, datasets: [{ label: 'Your Trait Scores', data: traitScores, backgroundColor: 'rgba(41, 145, 222, 0.6)', borderColor: 'rgba(41, 145, 222, 1)', borderWidth: 1 }] },
                 options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, scales: { x: { beginAtZero: true, title: { display: true, text: 'Scores' }, ticks: { stepSize: 2, color: '#333' }, grid: { color: '#eee'} }, y: { title: { display: false }, ticks: { color: '#333' }, grid: { display: false } } }, plugins: { legend: { display: false }, title: { display: true, text: 'Your HeroType Trait Scores', color: '#333', font: { size: 16 } } }, animation: { duration: 400, easing: 'easeOutQuad' } }
             });
        } catch (e) {
             console.error("Error creating Chart:", e);
             chartElement.parentElement.innerHTML = '<p style="color: red;">Could not display scores chart.</p>';
        }
    }
}

// --- End of hero-app.js ---
</script>
<script>// FILE: hero-main.js (or inline script tag)

document.addEventListener('DOMContentLoaded', () => {
    // Ensure the necessary Classes and Data are loaded before initializing
    if (typeof HeroApp !== 'undefined' && typeof HeroQuiz !== 'undefined' && typeof heroDescriptions !== 'undefined') {
        // Make the app instance globally accessible (if needed for onclick attributes)
        window.heroApp = new HeroApp();
    } else {
        console.error("HeroApp initialization failed: Dependencies not loaded.");
        // Optionally display an error message to the user on the page
        document.body.innerHTML = '<p style="color: red; font-family: sans-serif; padding: 20px;">Application failed to load. Please check the console or contact support.</p>';
    }
});

// --- End of hero-main.js ---
</script>
