import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class DogForm extends Form {
  state = {
    data: {
      gender: "",
      breed: "",
      age: null,
      weight: null,
      height: null,
      vaccinated: false,
      castrated: false,
      dateRescued: "",
      placeRescued: "",
      rescueInfo: "",
      appearanceDescription: "",
      behaviorDescription: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    id: Joi.string(),
    gender: Joi.string().required().label("Gender"),
    breed: Joi.string().required().label("Breed"),
    age: Joi.number().integer().required().min(0).max(100).label("Age"),
    weight: Joi.number().integer().required().min(0).max(100).label("Weight"),
    height: Joi.number().integer().required().min(0).max(100).label("Height"),
    vaccinated: Joi.boolean().required().label("Vaccinated"),
    castrated: Joi.boolean().required().label("Castrated"),
    dateRescued: Joi.date().required().label("DateRescued"),
    placeRescued: Joi.string().required().label("PlaceRescued"),
    rescueInfo: Joi.string().required().label("RescueInfo"),
    appearanceDescription: Joi.string()
      .required()
      .label("AppearanceDescription"),
    behaviorDescription: Joi.string().required().label("BehaviorDescription"),
  };

  async populateGenres() {
    const { data: genres } = await getGenres();
    this.setState({ genres });
  }

  async populateDogs() {
    try {
      //const movieId = this.props.match.params.id;
      const movieId = this.props.location.pathname;

      if (movieId === "/dog") return;

      const { data: movie } = await getMovie(movieId);
      this.setState({ data: this.mapToViewModel(movie) });

      // console.log(this.state.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateGenres();
    await this.populateDogs();
  }

  mapToViewModel(dogModel) {
    const dog = dogModel.dog;
    return dog;
  }

  doSubmit = async () => {
    await saveMovie(this.state.data);
    console.log(this.state.data);

    this.props.history.push("/add");
    window.location = "/";
  };

  render() {
    return (
      <div>
        <h1>Profil psa</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("gender", "Pohlavie psa")}
          {this.renderInput("breed", "Plemeno")}
          {this.renderInput("age", "Vek", "number")}
          {this.renderInput("weight", "Váha", "number")}
          {this.renderInput("height", "Výška", "number")}
          {this.renderCheckbox("vaccinated", "Zaočkovaný")}
          {this.renderCheckbox("castrated", "Kastrovaný")}
          {this.renderInput("dateRescued", "Dátum nájdenia")}
          {this.renderInput("placeRescued", "Miesto nájdenia")}
          {this.renderInput("rescueInfo", "RescueInfo")}
          {this.renderInput(
            "appearanceDescription",
            "Základný opis výzoru / Farba srsti"
          )}
          {this.renderInput("behaviorDescription", "Opis povahy")}

          {this.renderButton("Uložiť")}
        </form>
      </div>
    );
  }
}

export default DogForm;
