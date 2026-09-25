export const templates = {
  home: `
    <section class="quem-somos" aria-labelledby="titulo-quem-somos">
      <h2 id="titulo-quem-somos">Quem Somos</h2>
      <p><strong>ONG Esperança Viva - Transformando vidas desde 2018.</strong></p>
      <p>Somos uma ONG dedicada a transformar vidas por meio de educação e segurança alimentar. Nascemos na Vila Esperança</p>

      <h3>Nossa Missão</h3>
      <p>Promover dignidade através da educação e segurança alimentar, criando oportunidades reais para famílias em vulnerabilidade.</p>

      <h3>Nossa Visão</h3>
      <p>Ser referência nacional em projetos sociais sustentáveis até 2030.</p>

      <h3>Nossos Valores</h3>
      <ul aria-label="Lista de valores da ONG">
        <li>🤝 Solidariedade e respeito</li>
        <li>📚 Educação como base de tudo</li>
        <li>🔍 Transparência total nas doações</li>
        <li>🌱 Sustentabilidade</li>
      </ul>

      <div class="numeros" role="region" aria-label="Números da ONG">
        <div><strong>6+</strong><span>Anos de atuação</span></div>
        <div><strong>300+</strong><span>Famílias atendidas</span></div>
        <div><strong>120+</strong><span>Voluntários</span></div>
      </div>
    </section>
  `,
  projetos: `
    <section aria-labelledby="titulo-projetos">
      <h2 id="titulo-projetos">Nossos Projetos</h2>
      <article aria-label="Projeto Educação para Todos">
        <h3>Educação para Todos</h3>
        <p>Reforço escolar para 80 crianças da comunidade.</p>
      </article>
      <article aria-label="Projeto Cozinha Solidária">
        <h3>Cozinha Solidária</h3>
        <p>Distribuição de 500 marmitas por semana.</p>
      </article>
    </section>
  `,
  cadastro: `
    <section aria-labelledby="titulo-cadastro">
      <h2 id="titulo-cadastro">Seja Voluntário</h2>
      <form id="formVoluntario" aria-label="Formulário de cadastro de voluntário" novalidate>
        <label for="nome">Nome Completo
          <input type="text" id="nome" name="nome" required aria-required="true" aria-describedby="erro-nome">
          <span id="erro-nome" class="erro" role="alert"></span>
        </label>
        <label for="cpf">CPF
          <input type="text" id="cpf" name="cpf" required aria-required="true" inputmode="numeric">
        </label>
        <label for="tel">Telefone
          <input type="text" id="tel" name="tel" required aria-required="true" inputmode="tel">
        </label>
        <label for="cep">CEP
          <input type="text" id="cep" name="cep" required aria-required="true" inputmode="numeric">
        </label>
        <button type="submit" aria-label="Cadastrar como voluntário">Cadastrar</button>
      </form>
      <div id="lista" role="region" aria-live="polite" aria-label="Lista de voluntários cadastrados"></div>
    </section>
  `
};