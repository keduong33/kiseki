import { wrapCopiedResults } from "neo-forgery";

export const mock1Neo4jResult = wrapCopiedResults([
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 5,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Proverb Inferencing",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:5",
      },
      null,
      {
        identity: {
          low: 28,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 5,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:28",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:5",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 3,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Changing Sentence",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:3",
      },
      null,
      {
        identity: {
          low: 27,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 3,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:27",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:3",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 2,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Word Replacement",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:2",
      },
      null,
      {
        identity: {
          low: 26,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 2,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 3,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:26",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:2",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 0,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Key Theme",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:0",
      },
      null,
      {
        identity: {
          low: 25,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 0,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:25",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:0",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 45,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Truth Statement",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:45",
      },
      null,
      {
        identity: {
          low: 24,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 45,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:24",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:45",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 44,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Paragraph Questions",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:44",
      },
      null,
      {
        identity: {
          low: 23,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 44,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 10,
          numberOfCorrectAnswersByTopic: 1,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:23",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:44",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 43,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Correct Punctuation",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:43",
      },
      null,
      {
        identity: {
          low: 22,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 43,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:22",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:43",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
  {
    keys: ["result", "topic", "subtopic", "hasTopic", "hasSubtopic"],
    length: 5,
    _fields: [
      {
        identity: {
          low: 41,
          high: 0,
        },
        labels: ["Result"],
        properties: {
          createdAt: {
            year: {
              low: 2023,
              high: 0,
            },
            month: {
              low: 12,
              high: 0,
            },
            day: {
              low: 19,
              high: 0,
            },
            hour: {
              low: 16,
              high: 0,
            },
            minute: {
              low: 43,
              high: 0,
            },
            second: {
              low: 47,
              high: 0,
            },
            nanosecond: {
              low: 680000000,
              high: 0,
            },
            timeZoneOffsetSeconds: {
              low: 39600,
              high: 0,
            },
          },
          totalNumberOfCorrectAnswers: 1,
          id: "user_2ZkGavuH18fna5LSxicrLSwPAf4&2023-12-19T16:43:47.680000000+11:00",
          totalNumberOfQuestions: 25,
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
      },
      {
        identity: {
          low: 42,
          high: 0,
        },
        labels: ["Topic"],
        properties: {
          topic: "Implied Word",
        },
        elementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:42",
      },
      null,
      {
        identity: {
          low: 21,
          high: 0,
        },
        start: {
          low: 41,
          high: 0,
        },
        end: {
          low: 42,
          high: 0,
        },
        type: "HAS_TOPIC",
        properties: {
          numberOfQuestionsByTopic: 2,
          numberOfCorrectAnswersByTopic: 0,
        },
        elementId: "5:e1d4a597-d26e-4031-adf6-44dec6a2a444:21",
        startNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:41",
        endNodeElementId: "4:e1d4a597-d26e-4031-adf6-44dec6a2a444:42",
      },
      null,
    ],
    _fieldLookup: {
      result: 0,
      topic: 1,
      subtopic: 2,
      hasTopic: 3,
      hasSubtopic: 4,
    },
  },
]);
