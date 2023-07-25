FROM node:18 AS Production

ENV PORT 80

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

WORKDIR app/src/fargate-demo

COPY pnpm-lock.yaml .
COPY package.json .

RUN pnpm install;

COPY . .

EXPOSE 80

CMD ["sh","-c", "pnpm start"]