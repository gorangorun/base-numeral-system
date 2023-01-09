const BASE = [2, 8, 10, 16]

export class BaseNumeralSystem {
  from(from) {
    this.fromBase = from
    return this
  }

  to(to) {
    this.toBase = to
    return this
  }

  convert(input) {
    if (!BASE.includes(this.fromBase)) {
      throw new Error('Invalid `from` base number')
    }

    if (!BASE.includes(this.toBase)) {
      throw new Error('Invalid `to` base number')
    }

    const data = parseInt(input, this.fromBase)
    let output = data.toString(this.toBase)

    if (output.toString() == "NaN") {
      throw new Error("Invalid input")
    }

    return output
  }
}
