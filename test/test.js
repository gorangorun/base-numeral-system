import assert from 'assert'
import { BaseNumeralSystem } from '../src/base-numeral-system.js'

describe('Convert from Binary to', () => {
  let binary = new BaseNumeralSystem().from(2)

  describe('Decimal', () => {
    it('should be successful', () => {
      assert.equal(binary.to(10).convert('10'), 2)
    })
  })

  describe('Octal', () => {
    it('should be successful', () => {
      assert.equal(binary.to(8).convert('101'), 5)
    })
  })

  describe('Hexadecimal', () => {
    it('should be successful', () => {
      assert.equal(binary.to(16).convert('1111'), 'f')
    })
  })
})

describe('Convert from Decimal to', () => {
  let decimal = new BaseNumeralSystem().from(10)

  describe('Binary', () => {
    it('should be successful', () => {
      assert.equal(decimal.to(2).convert('8'), 1000)
    })
  })

  describe('Octal', () => {
    it('should be successful', () => {
      assert.equal(decimal.to(8).convert('15'), 17)
    })
  })

  describe('Hexadecimal', () => {
    it('should be successful', () => {
      assert.equal(decimal.to(16).convert('15'), 'f')
    })
  })
})

describe('Convert from Octal to', () => {
  let octal = new BaseNumeralSystem().from(8)

  describe('Decimal', () => {
    it('should be successful', () => {
      assert.equal(octal.to(10).convert('15'), 13)
    })
  })

  describe('Binary', () => {
    it('should be successful', () => {
      assert.equal(octal.to(2).convert('2'), 10)
    })
  })

  describe('Hexadecimal', () => {
    it('should be successful', () => {
      assert.equal(octal.to(16).convert('17'), 'f')
    })
  })
})

describe('Convert from Hexadecimal to', () => {
  let hex = new BaseNumeralSystem().from(16)

  describe('Decimal', () => {
    it('should be successful', () => {
      assert.equal(hex.to(10).convert('ff'), 255)
    })
  })

  describe('Octal', () => {
    it('should be successful', () => {
      assert.equal(hex.to(8).convert('2a'), 52)
    })
  })

  describe('Binary', () => {
    it('should be successful', () => {
      assert.equal(hex.to(2).convert('f'), 1111)
    })
  })
})

describe('Invalid from base', () => {
  it('should throw error', () => {
    assert.throws(() => { new BaseNumeralSystem().from(3).convert('foo') }, Error)
  })
})

describe('Invalid to base', () => {
  it('should throw error', () => {
    assert.throws(() => { new BaseNumeralSystem().from(2).to(7).convert('foo') }, Error)
  })
})

describe('Invalid input', () => {
  it('should throw error', () => {
    assert.throws(() => { new BaseNumeralSystem().from(2).to(16).convert('') }, Error)
  })
})
