<!-- {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "object",
  "properties": {
    "info": {
      "type": "object",
      "properties": {
        "_postman_id": {
          "type": "string"
        },
        "name": {
          "type": "string"
        },
        "description": {
          "type": "string"
        },
        "schema": {
          "type": "string"
        },
        "_exporter_id": {
          "type": "string"
        },
        "_collection_link": {
          "type": "string"
        }
      },
      "required": [
        "_postman_id",
        "name",
        "description",
        "schema",
        "_exporter_id",
        "_collection_link"
      ]
    },
    "item": {
      "type": "array",
      "items": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "item": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            },
                            "options": {
                              "type": "object",
                              "properties": {
                                "raw": {
                                  "type": "object",
                                  "properties": {
                                    "language": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "language"
                                  ]
                                }
                              },
                              "required": [
                                "raw"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "raw",
                            "options"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            },
                            "options": {
                              "type": "object",
                              "properties": {
                                "raw": {
                                  "type": "object",
                                  "properties": {
                                    "language": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "language"
                                  ]
                                }
                              },
                              "required": [
                                "raw"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "raw",
                            "options"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            },
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            },
                            "options": {
                              "type": "object",
                              "properties": {
                                "raw": {
                                  "type": "object",
                                  "properties": {
                                    "language": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "language"
                                  ]
                                }
                              },
                              "required": [
                                "raw"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "raw",
                            "options"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            },
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            },
                            "options": {
                              "type": "object",
                              "properties": {
                                "raw": {
                                  "type": "object",
                                  "properties": {
                                    "language": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "language"
                                  ]
                                }
                              },
                              "required": [
                                "raw"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "raw",
                            "options"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            },
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "mode",
                            "raw"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "formdata": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "object",
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "type": {
                                      "type": "string"
                                    },
                                    "src": {
                                      "type": "array",
                                      "items": {}
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "type",
                                    "src"
                                  ]
                                }
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "formdata"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "file": {
                              "type": "object",
                              "properties": {
                                "src": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "src"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "file"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "object",
                          "properties": {
                            "raw": {
                              "type": "string"
                            },
                            "protocol": {
                              "type": "string"
                            },
                            "host": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
                            },
                            "path": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
                            },
                            "query": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "object",
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "value"
                                  ]
                                },
                                {
                                  "type": "object",
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "value"
                                  ]
                                }
                              ]
                            }
                          },
                          "required": [
                            "raw",
                            "protocol",
                            "host",
                            "path",
                            "query"
                          ]
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "object",
                          "properties": {
                            "raw": {
                              "type": "string"
                            },
                            "protocol": {
                              "type": "string"
                            },
                            "host": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
                            },
                            "path": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "string"
                                },
                                {
                                  "type": "string"
                                }
                              ]
                            },
                            "query": {
                              "type": "array",
                              "items": [
                                {
                                  "type": "object",
                                  "properties": {
                                    "key": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "null"
                                    }
                                  },
                                  "required": [
                                    "key",
                                    "value"
                                  ]
                                }
                              ]
                            }
                          },
                          "required": [
                            "raw",
                            "protocol",
                            "host",
                            "path",
                            "query"
                          ]
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "auth": {
                          "type": "object",
                          "properties": {
                            "type": {
                              "type": "string"
                            },
                            "basic": {
                              "type": "object",
                              "properties": {
                                "username": {
                                  "type": "string"
                                },
                                "password": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "username",
                                "password"
                              ]
                            }
                          },
                          "required": [
                            "type",
                            "basic"
                          ]
                        },
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "auth",
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "request",
                    "response"
                  ]
                }
              ]
            }
          },
          "required": [
            "name",
            "item"
          ]
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "item": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": {}
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                },
                {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "event": {
                      "type": "array",
                      "items": [
                        {
                          "type": "object",
                          "properties": {
                            "listen": {
                              "type": "string"
                            },
                            "script": {
                              "type": "object",
                              "properties": {
                                "exec": {
                                  "type": "array",
                                  "items": [
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    },
                                    {
                                      "type": "string"
                                    }
                                  ]
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "exec",
                                "type"
                              ]
                            }
                          },
                          "required": [
                            "listen",
                            "script"
                          ]
                        }
                      ]
                    },
                    "request": {
                      "type": "object",
                      "properties": {
                        "method": {
                          "type": "string"
                        },
                        "header": {
                          "type": "array",
                          "items": [
                            {
                              "type": "object",
                              "properties": {
                                "key": {
                                  "type": "string"
                                },
                                "value": {
                                  "type": "string"
                                },
                                "type": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "key",
                                "value",
                                "type"
                              ]
                            }
                          ]
                        },
                        "body": {
                          "type": "object",
                          "properties": {
                            "mode": {
                              "type": "string"
                            },
                            "raw": {
                              "type": "string"
                            },
                            "options": {
                              "type": "object",
                              "properties": {
                                "raw": {
                                  "type": "object",
                                  "properties": {
                                    "language": {
                                      "type": "string"
                                    }
                                  },
                                  "required": [
                                    "language"
                                  ]
                                }
                              },
                              "required": [
                                "raw"
                              ]
                            }
                          },
                          "required": [
                            "mode",
                            "raw",
                            "options"
                          ]
                        },
                        "url": {
                          "type": "string"
                        }
                      },
                      "required": [
                        "method",
                        "header",
                        "body",
                        "url"
                      ]
                    },
                    "response": {
                      "type": "array",
                      "items": {}
                    }
                  },
                  "required": [
                    "name",
                    "event",
                    "request",
                    "response"
                  ]
                }
              ]
            }
          },
          "required": [
            "name",
            "item"
          ]
        }
      ]
    }
  },
  "required": [
    "info",
    "item"
  ]
} -->