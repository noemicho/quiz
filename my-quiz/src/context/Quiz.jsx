import { createContext, useReducer } from "react";
import questions from '../data/questions.js'

const STAGES = ['Start', 'Playing', 'End']

const InicialState = {
    gameStage: STATES[0],
    questions
}

const quizReducer = (state, action) => {
    switch(action.type){
        
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = {name: "Quiz"};
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
} 