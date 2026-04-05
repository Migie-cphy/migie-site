---
name: tutorial-writing-style
description: Use when writing or rewriting tutorial-style blog posts for Migie's site, especially onboarding content for junior lab members. Apply Migie's preferred tutorial structure, tone, example formatting, and command annotation style so posts stay practical, concise, and consistent.
---

# Tutorial Writing Style

Use this skill when writing tutorial-style blog posts for Migie's site, especially posts aimed at new lab members.

## Core goal

Write posts that help a new student get unblocked quickly.

The priority is:

1. fast practical usefulness
2. clear execution steps
3. low intimidation
4. consistent style across tutorials

Do not write like a textbook, product manual, or generic AI tutorial.

## Audience

Assume the reader is:

- new to the topic
- technically capable but not yet fluent
- likely blocked by environment, workflow, or missing context

Default audience for these posts is junior lab members, not internet-general beginners and not senior experts.

## Tone

Use a calm, direct, slightly friendly tone.

The target voice is:

- like an experienced senior student showing a junior how to get started
- not lecturing
- not overly soft
- not motivational
- not generic

Keep judgment clear, but lower unnecessary pressure.

Good pattern:

- say what matters first
- explain why briefly
- show the minimal working path

Avoid:

- “this is trivial”
- “you must already know”
- “obviously”
- too much warning language unless the risk is real
- overexplaining theory before action

## Structure defaults

For tutorial posts, prefer this structure unless the topic strongly demands another:

1. title
2. goal or one-line objective
3. short background / why this matters
4. main body grouped by real workflow
5. common pitfalls
6. minimal checklist or what the reader should now be able to do

For large topics, split into:

- basic
- advanced

Use this pattern when it helps new readers separate “what I need today” from “what I can learn later”.

## Writing rules

- Be conclusion-first.
- Prefer practical order over conceptual completeness.
- Keep paragraphs short.
- Explain commands in context, not in isolation.
- Prefer “what problem this solves” over abstract definitions.
- When introducing a tool, say when to use it and when not to bother.
- If something is dangerous, say so clearly and briefly.
- If a workflow has a simpler but slightly less elegant version, prefer the simpler one for beginners.

## Example formatting

For command examples, prefer annotated code blocks.

Default style:

```bash
pwd        # show current directory
ls -l      # list files with details
cd ..      # go to parent directory
```

Apply this to most executable examples in tutorial posts.

Use line-by-line comments when:

- the command is beginner-facing
- the command structure is important
- the reader benefits from quick scanning

Do not force comments onto:

- very short placeholders
- prose-only snippets
- non-executable key combinations

For config examples, comment key fields inline when useful:

```ssh-config
Host hpc                 # local alias
    HostName xx.xx.xx.xx # remote host
    User username        # login user
```

## What to emphasize

Prioritize:

- the smallest useful working path
- common mistakes beginners actually make
- examples drawn from scientific computing workflows
- file paths, logs, remote servers, batch operations, reproducibility

If relevant, tie examples back to real research use cases such as:

- checking output files
- syncing results
- preparing inputs
- restarting jobs
- extracting values from many directories

## What to avoid

Avoid:

- turning the post into an encyclopedic command reference
- too many options for the same task
- deep theory before the reader can act
- excessive decorative prose
- pretending weak alternatives are equally good

If one option is the best default for beginners, recommend it directly.

## Migration / consolidation rule

When merging multiple older posts into one tutorial:

- keep the strongest practical material
- remove duplicated explanations
- unify tone and formatting
- preserve useful examples and pitfalls
- prefer one coherent main path over historical accumulation

If older posts will later be deleted, ensure the new post contains all essential operational content before removing references.

## Directory / TOC assumption

Assume long tutorial posts may have an automatic table of contents in the site layout.

So:

- use clear `h2` and `h3` headings
- keep heading text descriptive
- avoid vague headings like “More” or “Other notes”

## Default close

End tutorial posts by making the reader’s next state explicit.

Good endings:

- what they should now be able to do
- what to try next
- what part is enough for now vs later

The post should leave the reader with a clear shortest useful next step.
