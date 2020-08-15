import { createRouter, createMemoryHistory } from 'vue-router';

import Messages from './Messages.vue';
import MessagesChat from './MessagesChat.vue';
import MessagesChatEmpty from './MessagesChatEmpty.vue';
import MessagesChatForward from './MessagesChatForward.vue';

export default createRouter({
  history: createMemoryHistory(),

  routes: [
    {
      path: '',
      redirect: '/messages'
    },

    {
      path: '/messages',
      component: Messages,
      children: [
        {
          name: 'messages',
          path: '',
          component: MessagesChatEmpty
        },
        {
          name: 'chat',
          path: ':id',
          component: MessagesChat
        },
        {
          name: 'forward-to',
          path: 'forward-to',
          component: MessagesChatForward
        }
      ]
    }
  ]
});
