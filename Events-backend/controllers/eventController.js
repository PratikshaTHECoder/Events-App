const eventService = require("../services/eventService");

exports.getEventsByCity = (req, res, next) => {
    const { city } = req.params;
    if (!city) {
        return res.status(400).json({ status: 0, message: "City parameter is required!" });
    }
    eventService.getEventsByCity(city, (error, events) => {
        if (error) {
            return res.status(500).json({ status: 0, message: error });
        }
        return res.status(200).json({ status: 1, data: events });
    });
};

exports.getEventById = (req, res, next) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({ status: 0, message: "Event ID is required!" });
    }

    eventService.getEventById(id, (error, event) => {
        if (error) {
            return res.status(500).json({ status: 0, message: error });
        }
        return res.status(200).json({ status: 1, data: event });
    });
};
