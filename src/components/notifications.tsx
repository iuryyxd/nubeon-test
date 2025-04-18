import { NotificationEmailItem } from "./notification-email-item";
import { NotificationItem } from "./notification-item";
import { LocalIcon } from "./ui/icons";

export function Notifications() {
  return (
    <section className="border-border max-w-max-width mx-auto mt-12 rounded-3xl border bg-white px-10 pt-14 pb-10">
      <h4 className="text-xl font-semibold">Central de notificações</h4>
      <span className="text-base font-normal">
        Gerencie sua caixa de entrada e fique atento às novidades!
      </span>
      <div className="border-border mt-5 rounded-[10px] border px-8 pt-5 pb-28">
        <h6 className="text-[1.0625rem] font-semibold">Notificações</h6>
        <span className="text-base font-normal text-black/70">
          Aqui estão as notificações e conquistas realizadas
        </span>
        <ul>
          <NotificationItem
            content="Parabéns por realizar a sua primeira coleta dentro do nosso App, pequenos atos geram grandes resultados!"
            date={new Date()}
          />
          <NotificationItem
            content="Confirmação de e-mail recebida - fique á vontade para acessar nossa plataforma e garantir seus benefícios!!"
            date={new Date()}
          />
          <NotificationItem
            content="Cadastrar Endereço"
            link="https://www.google.com"
            icon={<LocalIcon className="text-white" />}
          />
          <NotificationEmailItem />
        </ul>
      </div>
    </section>
  );
}
