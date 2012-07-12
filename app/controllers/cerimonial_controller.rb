class CerimonialController < ApplicationController

  def index

  end

  def teste

  end

  def fotos

  end

  def contato
    @mensagem_sucesso = params["mensagem_sucesso"] if params["mensagem_sucesso"].present?

  end

  def espaco

  end

  def servicos

  end

  def send_email

    nome        = params["nome"]
    email       = params["email"]
    assunto     = "Mensagem Esplendido - " + params["assunto"].to_s
    mensagem    = params["mensagem"]
    telefone    = params["telefone"]

    gmail = Gmail.connect("esplendidocerimonial@esplendidocerimonial.com.br", "h7Y3n9F3")

    gmail.deliver do
      from "#{email}"
      to "contato@esplendidocerimonial.com.br"
      cc "nequirandrade@gmail.com"
      subject "#{assunto}"

      text_part do
        body "#{mensagem}"
      end

      html_part do
        body "Enviado por: #{nome}\n\nEmail: #{email}\n\nTelefone: #{telefone}\n\nAssunto: #{assunto}\n\nMensagem: #{mensagem}"
      end
    end

    redirect_to({:controller => 'cerimonial' , :action => 'contato', :mensagem_sucesso=>"Mensagem enviada! Em breve entraremos em contato"})

    gmail.logout


  end

end

