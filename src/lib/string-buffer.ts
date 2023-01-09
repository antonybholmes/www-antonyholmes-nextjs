/**
 * A Simple stringbuffer implementation
 */
export default class StringBuffer {
  buffer: string[]
  index: number
  length: number

  constructor() {
    this.buffer = []
    this.index = 0
    this.length = 0
  }

  /**
   * Add a string to the buffer.
   *
   * @param s {string} string to add to buffer.
   * @returns {StringBuffer} the buffer.
   */
  append(s: string): StringBuffer {
    this.buffer[this.index] = s
    this.index += 1
    this.length += s.length
    return this
  }

  /**
   * Clear the buffer for reuse.
   *
   * @returns {StringBuffer} the buffer.
   */
  clear(): StringBuffer {
    this.buffer = []
    this.index = 0
    this.length = 0
    return this
  }

  getLength(): number {
    return this.length
  }

  /**
   * Return a string representation of the buffer.
   *
   * @returns {string} a string representation of the buffer.
   */
  toString(): string {
    return this.buffer.join("")
  }
}
