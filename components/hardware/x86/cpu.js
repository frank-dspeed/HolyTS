// Simple CPU
const Cpu = `
DataBus(Memory, Decoder, InstructionRegister,InputOutput,ProgramCounter, Registers, ALU); // blue
AddressBus(Memory, InstructionRegister, InputOutput, ProgramCounter); // green
ControlLines(Memory, Decoder, InstructionRegister, InputOutput, Registers, ALU) // red
`;
