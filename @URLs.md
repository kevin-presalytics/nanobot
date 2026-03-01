ABOUTME: Lists files under bots/nanobot that reference hardcoded URLs, grouped by folder.
ABOUTME: Each entry shows the file path and the literal URL(s) found.

Copyright (c) 2026 nanobot contributors

# Hardcoded URLs referenced in bots/nanobot (grouped by folder)

Note: this document was generated automatically. It lists files that contain literal http:// or https:// strings.

## bots/nanobot/
- README.md
  - many documentation links (examples and provider docs), e.g. https://openrouter.ai/keys, https://github.com/HKUDS/nanobot, https://openrouter.ai, https://open.bigmodel.cn, https://api.star-history.com, badges like https://img.shields.io/pypi/v/nanobot-ai, and more.
- Dockerfile
  - commented Node.js apt repository URLs: https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key, https://deb.nodesource.com/node_20.x
- COMMUNICATION.md
  - image asset: https://github.com/HKUDS/.github/blob/main/profile/QR.png
- case/
  - GIF files that contain embedded references (ezgif): case/memory.gif, case/scedule.gif, case/search.gif, case/code.gif

## bots/nanobot/bridge/src/
- server.ts
  - healthcheck template (runtime interpolation): http://${this.host}:${healthPort}/health

## bots/nanobot/nanobot/

### config/
- schema.py
  - proxy example and mochat defaults: http://127.0.0.1:7890, https://mochat.io

### cli/
- commands.py
  - onboarding / help links and defaults: https://openrouter.ai/keys, https://github.com/HKUDS/nanobot#-chat-apps, and default api_base placeholder http://localhost:8000/v1

### providers/
- custom_provider.py
  - default api_base used when creating a CustomProvider: http://localhost:8000/v1
- registry.py
  - many provider default_api_base values (examples used at runtime):
    - https://openrouter.ai/api/v1
    - https://aihubmix.com/v1
    - https://api.siliconflow.cn/v1
    - https://ark.cn-beijing.volces.com/api/v3
    - https://chatgpt.com/backend-api
    - https://api.moonshot.ai/v1
    - https://api.minimax.io/v1
- openai_codex_provider.py
  - DEFAULT_CODEX_URL: https://chatgpt.com/backend-api/codex/responses
- transcription.py
  - groq transcription endpoint: https://api.groq.com/openai/v1/audio/transcriptions

### channels/
- dingtalk.py
  - OAuth token & message-send endpoints:
    - https://api.dingtalk.com/v1.0/oauth2/accessToken
    - https://api.dingtalk.com/v1.0/robot/oToMessages/batchSend
    - docs reference: https://open.dingtalk.com/document/orgapp/robot-batch-send-messages
- discord.py
  - DISCORD_API_BASE constant used for REST calls: https://discord.com/api/v10

### agent/tools/
- web.py
  - Brave Search API endpoint used by WebSearchTool: https://api.search.brave.com/res/v1/web/search

### skills/
- weather/SKILL.md
  - examples and docs: https://wttr.in/:help, https://api.open-meteo.com/v1/forecast?latitude=51.5&longitude=-0.12&current_weather=true, https://open-meteo.com/en/docs
- summarize/SKILL.md
  - examples: https://example.com, YouTube sample https://youtu.be/dQw4w9WgXcQ
- clawhub/SKILL.md
  - homepage: https://clawhub.ai

### tests/
- tests/test_memory_consolidation_types.py
  - regression reference: https://github.com/HKUDS/nanobot/issues/1042

## Notes
- Files above include both runtime/executable code (Python/TypeScript) and documentation (README/SKILL.md). Runtime files are the ones to prioritize when removing or making URLs configurable.
- If you want, I can open a small PR to centralize runtime URLs into config/env variables (recommended for providers, Discord/DingTalk endpoints, Groq transcription URL, Brave Search API base, and any localhost/dev defaults).
