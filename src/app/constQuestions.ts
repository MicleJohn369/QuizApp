import { MultiplechoiceQuestion, VoicelineQuestion } from "./interfaces/question";

export class ConstQuestions {

    static readonly whiteboardUrls: string[] = [
        '99090540-6ea4-4014-ae2a-db97e028dba8',  //Spieler 1 Url
        'd825987e-cff0-45ef-9d1a-b34dbcf3d6c5',  //Spieler 2 Url
        '1b942aac-2e88-424d-96ed-3576e90dbfc9',  //Spieler 3 Url
        'c36ed847-361f-4d53-88c7-69aef20ca5d8'   //Spieler 4 Url
      ];

    static readonly multiplechoice1:  MultiplechoiceQuestion = {
        question: "test Frage",
        options: {
            option1: "A: 1111",
            option2: "B: 2222",
            option3: "C: 3333",
            option4: "D: 4444",
        },
        kind: 'Multiple-Choice-Fragen',
        correctAnswer: 'D: 4444'
    }
    static readonly multiplechoice2:  MultiplechoiceQuestion = {
        question: "",
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        kind: 'Multiple-Choice-Fragen',
        correctAnswer: ''
    }
    static readonly multiplechoice3:  MultiplechoiceQuestion = {
        question: "",
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        kind: 'Multiple-Choice-Fragen',
        correctAnswer: ''
    }
    static readonly multiplechoice4:  MultiplechoiceQuestion = {
        question: "",
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        kind: 'Multiple-Choice-Fragen',
        correctAnswer: ''
    }
    static readonly multiplechoice5:  MultiplechoiceQuestion = {
        question: "",
        options: {
            option1: "",
            option2: "",
            option3: "",
            option4: ""
        },
        kind: 'Multiple-Choice-Fragen',
        correctAnswer: ''
    }

    
    static readonly voiceline1: VoicelineQuestion = {
        question: "Von wem stammt die Voiceline?",
        voiceLine: "assets/voicelines/unbenannt.mp3",
        kind: "Voiceline-Fragen",
        correctAnswer: "nameless"
    }
    static readonly voiceline2: VoicelineQuestion = {
        question: "",
        voiceLine: "",
        kind: "Voiceline-Fragen",
        correctAnswer: ""
    }
    static readonly voiceline3: VoicelineQuestion = {
        question: "",
        voiceLine: "",
        kind: "Voiceline-Fragen",
        correctAnswer: ""
    }
    static readonly voiceline4: VoicelineQuestion = {
        question: "",
        voiceLine: "",
        kind: "Voiceline-Fragen",
        correctAnswer: ""
    }
    static readonly voiceline5: VoicelineQuestion = {
        question: "",
        voiceLine: "",
        kind: "Voiceline-Fragen",
        correctAnswer: ""
    }

    static readonly multiplechoiceQuestions: MultiplechoiceQuestion[]  = [this.multiplechoice1,this.multiplechoice2,this.multiplechoice3,this.multiplechoice4,this.multiplechoice5]
    static readonly voicelineQuestions: VoicelineQuestion[] = [this.voiceline1, this.voiceline2, this.voiceline3, this.voiceline4, this.voiceline5 ]

}
