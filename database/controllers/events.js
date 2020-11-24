const db = require("../models/Event");

const index = (req, res) => {
  db.Event.find({})
  .then((foundEvents) => {
    res.json({events: foundEvents });
  });

  console.log('underneath database query');

};

const show = (req, res) => {
  db.Event.findById(req.params.id)
    .then((foundEvents) => {
      res.json({events: foundEvents });
    })
    .catch((err) => {
      console.log('Error in events.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};

const create = (req, res) => {
  db.Event.create(req.body)
    .then((savedEvent) => {
      res.json({ event: savedEvent });
    })
    .catch((err) => {
      console.log('Error in events.show:', err);
      res.json({Error: 'Unable to get data'});
    });
};



const update = (req, res) => {
  db.Event.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedEvent) => {
      if (err) console.log("Error in events#update:", err);

      res.send("Incomplete events#update controller function");
    }
  );
};

const destroy = (req, res) => {
  db.Event.findByIdAndDelete(req.params.id, (err, deletedEvent) => {
    if (err) console.log("Error in events#destroy:", err);

    res.send("Incomplete events#destroy controller function");
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};
