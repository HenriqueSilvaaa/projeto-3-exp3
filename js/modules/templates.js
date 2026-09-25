export const templates = {
    home: `
        <section class="quem-somos">
            <h2>Quem Somos</h2>
            <p><strong>ONG Esperança Viva - Transformando vidas desde 2018.</strong></p>
            <p>Somos uma ONG dedicada a transformar vidas por meio de educação e segurança alimentar. Nascemos na Vila Esperança com uma panela de sopa para 20 crianças e hoje atendemos mais de 300 famílias por mês.</p>
            
            <h3>Nossa Missão</h3>
            <p>Promover dignidade através da educação e segurança alimentar, criando oportunidades reais para famílias em vulnerabilidade.</p>

            <h3>Nossa Visão</h3>
            <p>Ser referência nacional em projetos sociais sustentáveis até 2030.</p>

            <h3>Nossos Valores</h3>
            <ul>
                <li>🤝 Solidariedade e respeito</li>
                <li>📚 Educação como base de tudo</li>
                <li>🔍 Transparência total nas doações</li>
                <li>🌱 Sustentabilidade</li>
            </ul>

            <div class="numeros">
                <div><strong>6+</strong><span>Anos de atuação</span></div>
                <div><strong>300+</strong><span>Famílias atendidas</span></div>
                <div><strong>120</strong><span>Voluntários</span></div>
            </div>
        </section>
    `,
    projetos: `
        <section>
            <h2>Nossos Projetos</h2>
            <article>
                <h3>Educação para Todos</h3>
                <p>Reforço escolar para 80 crianças da comunidade.</p>
            </article>
            <article>
                <h3>Cozinha Solidária</h3>
                <p>Distribuição de 500 marmitas por semana.</p>
            </article>
        </section>
    `,
    cadastro: `
        <section>
            <h2>Seja Voluntário</h2>
            <form id="formVoluntario">
                <label>Nome Completo
                    <input type="text" id="nome" required>
                    <span id="erro-nome" class="erro"></span>
                </label>
                <label>CPF
                    <input type="text" id="cpf" required>
                </label>
                <label>Telefone
                    <input type="text" id="tel" required>
                </label>
                <label>CEP
                    <input type="text" id="cep" required>
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </section>
    `
};