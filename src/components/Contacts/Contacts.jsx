import Contact from 'components/Contact/Contact';
import { CardsWrapper, CardsList, Title, Price } from './Contacts.styled';
import { contacts } from 'data/data';

export default function ContactsList() {
  return (
    <>
      <Title>
        За наступними контактами ви можете зв'язатись зі мною безпосередньо та
        замовити книгу "Вітер у голові" з авторським автографом всього лишень за
        <Price> 250 </Price>гривень! (поспішайте, поки діє ця чудова акція):
      </Title>

      <CardsWrapper>
        <CardsList>
          {contacts.map(contact => {
            const { id, name, href, Component, color } = contact;
            return (
              <Contact
                key={id}
                name={name}
                href={name === 'Gmail' ? `mailto:${href}` : href}
                component={Component}
                color={color}
              />
            );
          })}
        </CardsList>
      </CardsWrapper>
    </>
  );
}
