export default function Contato() {
  return (
    <section className="max-w-screen-lg mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4 text-amber-900 text-center">Contato</h2>

      <p className="text-gray-700 mb-6 text-center">
        Caso tenha dúvidas, sugestões ou queira entrar em contato conosco, utilize os canais abaixo:
      </p>

      <ul className="text-gray-700 space-y-3 max-w-md mx-auto">
        <li><strong>Telefone:</strong> (85) 3455-3081</li>
        <li><strong>Email:</strong> restaurante.ifce@tiangua.edu.br</li>
        <li><strong>Endereço:</strong> CE-187, s/n - Campus Tianguá, Tianguá - CE</li>
        <li><strong>Horário de Atendimento:</strong> Segunda a Sexta, 07h às 22h</li>
      </ul>
    </section>
  );
}
