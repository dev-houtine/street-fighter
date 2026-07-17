import { Controller } from "@hotwired/stimulus"
import { StreetFighterGame } from "/game/StreetFighterGame.js"

export default class extends Controller {
  static targets = ["canvas"]

  connect() {
    this.game = new StreetFighterGame(this.canvasTarget)
    this.game.start()
  }

  disconnect() {
    if (this.game) {
      this.game.stop()
      this.game = null
    }
  }
}
