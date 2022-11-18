function greetings(): string {
  const hours = new Date().getHours();

  if (hours >= 4 && hours < 12) return 'bom dia';

  if (hours >= 12 && hours < 18) return 'boa tarde';

  return 'boa noite';
}

export { greetings };
