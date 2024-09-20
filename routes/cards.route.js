import Card from "../models/dbCards.js";
import express from "express";

const cardRouter = express.Router();

cardRouter.post('/cards/new', async (req, res) => {
    try {
        const card = req.body
        const newCard = await Card.create(card)
        res.status(201).json({message: "Card created successfully", card: newCard})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

cardRouter.get('/cards', async (req, res) => {
    try {
        const cards = await Card.find()
        res.status(200).json(cards)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

cardRouter.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id
        const deletedCard = await Card.findByIdAndDelete(id)
        res.status(200).json({message: "Card deleted successfully", card: deletedCard})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default cardRouter