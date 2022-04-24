FROM denoland/deno:1.20.5
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts
WORKDIR /wtw
COPY deps.ts .
RUN deno cache deps.ts
ADD . .
RUN deno cache app.ts
ENTRYPOINT ["/usr/local/bin/denon"]
CMD ["denon","start"]
EXPOSE 5000
