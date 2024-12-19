import { ChangeEvent, useState, createContext } from 'react';
import { BlogManagerContainer, TextArea, ButtonContainer } from './styles';
import Button from 'components/Button/Button';
import Card from '../Card/Card';
import { MessagePostContext } from './types';

// 1 вариант - без кнопки delete у компонента Message
// export const MessagePost = createContext<string>('');

// 2 вариант - c кнопкой delete у компонента Message
export const MessagePost = createContext<MessagePostContext>({
  message: '',
  onPostChange: () => { }
});


function BlogManagement() {
  const [textArea, setTextArea] = useState<string>('');
  const [post, setPost] = useState<string>('');
  console.log(post);

  const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(event.target.value);
  };

  const onPost = () => {
    setPost(textArea);
    setTextArea('')
  };

  return (
    <MessagePost.Provider value={{
      message: post,
      onPostChange: setPost
    }}>
      <BlogManagerContainer>
        <TextArea value={textArea} onChange={onChangeTextArea} />
        <ButtonContainer>
          <Button name="Post" onClick={onPost} />
        </ButtonContainer>
        {post && <Card />}
      </BlogManagerContainer>
    </MessagePost.Provider>
  );
}

export default BlogManagement;

