export default {
  navigation: {
    profile: 'プロフィール',
    skills: 'スキル',
    projects: 'プロジェクト',
    experience: '経歴',
    education: '学歴',
    certifications: '資格',
    articles: '記事',
    language: '言語'
  },
  profile: {
    title: 'プロフィール',
    name: 'sea-turt1eです',
    role: 'ソフトウェアエンジニア',
    greeting: 'こんにちは！',
    description: '自然言語処理を専門とした機械学習エンジニアとして活動しています。\n他にバックエンドやフロントエンドの開発、インフラの構築なども少々。',
    detailedDescription: 'メインは機械学習エンジニアとして、機械学習モデルの開発やデータ分析を行っています。また、バックエンドやフロントエンドの開発、インフラの構築なども行います。専門は自然言語処理です。',
    githubLink: 'GitHubページへ',
    contactLink: 'お問い合わせ',
    specialization: '専門分野',
    specializationDetail: '機械学習モデル開発\n自然言語処理',
    otherSkills: 'その他のスキル',
    otherSkillDetail: 'バックエンド/フロントエンド\nインフラ構築'
  },
  skills: {
    title: 'スキル',
    programming: 'プログラミング言語',
    frameworks: 'フレームワーク',
    tools: 'ツール',
    databases: 'データベース',
    proficiency: '習熟度'
  },
  projects: {
    title: 'プロジェクト',
    viewProject: 'ブログ記事を見る',
    viewGithub: 'GitHubで見る',
    mangagraph:{
      name: "MangaGraph",
      description: "メディア芸術データベースを活用した漫画の関係性を可視化するAPIサーバー"
    },
    kanjiconv: {
      name: 'kanjiconv',
      description: '固有名詞にも対応した「漢字」→「かな/ローマ字」Python変換ライブラリ'
    },
    yurenizer: {
      name: 'yurenizer',
      description: 'ルールベースで表記揺れを解消するPythonライブラリ'
    },
    nbanetwork: {
      name: 'NBANetwork',
      description: 'グラフニューラルネットワークでNBA選手の相性を予測'
    }
  },
  experience: {
    title: '職歴',
    present: '現在',
    educo: {
      company: '通信教育企業',
      leader: {
        role: '研究開発チームリーダー',
        year: '2024/09-現在',
        description: '機械学習モデル開発とデータ分析、LLMを用いたアプリ開発を担当。チームリーダーとしてプロジェクトの進行管理を行う。'
      },
      ai: {
        role: 'AIサーバーのバックエンドエンジニア',
        year: '2023/10-現在',
        description: '自社の他サービスからアクセスされるAI関連サービスのAPIの開発と運用'
      },
      fullstack: {
        role: 'toB向けサービスのバックエンド/フロントエンドエンジニア',
        year: '2024/06-2024/08, 2025/04-2025/05',
        description: 'toB向けサービスの改修を担当。GoとVue.jsを使用して、バックエンド開発とフロントエンド開発を行う。'
      }
    },
    morikatron: {
      company: 'モリカトロン株式会社',
      game: {
        role: 'ゲーム開発のバックエンドエンジニア',
        year: '2023/04-2023/07',
        description: 'インディーゲーム祭典用の自社ゲームのプロトタイプ開発'
      },
      textgen: {
        role: '生成モデル開発の機械学習/バックエンドエンジニア',
        year: '2020/10-2023/03',
        description: '機械学習を用いた雑談のできるテキスト生成モデルの開発と、モデルのボットへの適用。'
      },
      nlp: {
        role: '自然言語処理モデル開発の機械学習エンジニア',
        year: '2022/09-2022/12',
        description: 'ニューラルネットワークを用いた自然言語処理分類モデルの構築'
      },
      recruitment: {
        role: '採用（機械学習エンジニア）',
        year: '2021/04-2022/12',
        description: '採用におけるカジュアル面談と書類選考'
      }
    }
  },
  education: {
    title: '学歴',
    degree: '学位',
    university: '大学',
    achievements: '主な成果',
    naist: {
      school: 'NAIST（奈良先端科学技術大学院大学）',
      degree: '工学修士',
      year: '2018/04-2020/03',
      description: '自然言語処理学研究室。自然言語処理と機械学習を専門的に研究。',
      achievements: {
        thesis: '修士論文: 会話における文脈を考慮した皮肉検出',
        internship: 'インターンシップ: 株式会社ニューズピックス（現:株式会社ユーザベース）にて、ニュースコンテンツアルゴリズムの改善に従事'
      }
    },
    tsukuba: {
      school: '筑波大学',
      degree: '社会工学士',
      year: '2014/04-2018/03',
      description: '組織行動論研究室。行動心理学を学び、データ分析/統計の基礎を習得。',
      achievements: {
        thesis: '卒業論文: 看護師の抑うつ対処に関する分析/統計の研究',
        internship: 'インターンシップ: 株式会社レアジョブのフィリピンオフィスにてマーケティング業務に従事'
      }
    }
  },
  certifications: {
    title: '資格・認定',
    issued: '発行',
    expires: '有効期限',
    awsMl: {
      name: 'AWS Certified Machine Learning - Specialty',
      description: 'AWSでの機械学習に関する専門的な知識とスキルを証明する認定資格',
      skills: {
        aws: 'AWS',
        ml: '機械学習',
        analysis: 'データ分析',
        development: 'モデル開発'
      }
    },
    toeic: {
      name: 'TOEIC L&R 795点',
      description: '英語によるリスニング&リーディング能力を測定するテスト',
      skills: {
        english: '英語',
        listening: 'リスニング',
        reading: 'リーディング',
        communication: 'コミュニケーション'
      }
    }
  },
  articles: {
    title: 'Zenn記事',
    loading: '記事を読み込み中...',
    error: '記事の取得に失敗しました。しばらく後でもう一度お試しください。',
    readArticle: '記事を読む',
    viewAll: 'すべての記事を見る',
    viewOnZenn: 'Zennページで記事を見る',
    viewOnSpeakerDeck: 'Speaker Deckページを見る',
    speakerDeckTitle: 'Speaker Deck',
    speakerDeckDescription: 'Speaker Deckで公開しているスライド資料はこちらから確認できます。',
    speakingHistoryTitle: '登壇歴',
    speakingHistoryDescription: 'カンファレンスや勉強会での登壇実績です。',
    speakingPoster: '（ポスターセッション）',
    speakingTalk: '（トーク）',
    speakingPlanned: '（予定）',
    speakingTentative: '（仮タイトル）',
    characters: '文字',
    likes: 'いいね'
  },
  common: {
    loading: '読み込み中...',
    error: 'エラーが発生しました',
    retry: '再試行'
  }
}
