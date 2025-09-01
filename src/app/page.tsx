import BannerSection2 from "@/components/BannerSection_two";
import PopularGames from '@/components/games'
import PopularGames2 from '@/components/games_two'
import TournamentsSection from "@/components/TournamentsSection";
import ArticleCasino from "@/components/article2";
import Faq from "@/components/faq";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer"


const GAMES = [
  {
    title: '1X Twin Fruits',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_1xfruits.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-1x-twin-fruits/',
    dataRef: 'game1'
  },

  {
    title: '3 Kings Scratch',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Three_Kings_Scratch.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-3-kings-scratch/'

  },

  {
    title: 'Across the Universe: Keno',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_admiralxfruit.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-across-the-universe-keno/'
  },

  {
    title: 'Admiral X Fruit Machine',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_admiralxfruit.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-admiral-x-fruit-machine/'
  },

  {
    title: 'Alien Fruits 2',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Alien_Fruits_2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-admiral-x-fruit-machine/'
  },

  {
    title: 'Aloha Tiki Bar Dice',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_alohadice.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-aloha-tiki-bar-dice/',
  },

  {
    title: 'Ankh of Anubis Awakening',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-16.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-ankh-of-anubis-awakening/',
  },

  {
    title: 'Aviamasters',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Aviamasters.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-aviamasters/',
  },

  {
    title: 'Azino Fruit Machine x25',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_azinofruit3.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-azino-fruit-machine-x25/',
  },

  {
    title: 'Aztec Clusters',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Aztec_Cluster.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-aztec-clusters/',
  },

  {
    title: 'Aztec`s Claw Wild Dice',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Aztecs_Claw_Wild_Dice.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-aztecs-claw-wild-dice/',
  },

  {
    title: 'Ben Gunn Robinson',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_bengunn.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-ben-gunn-robinson/',
  },

  {
    title: 'Big win x25',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_bigwinx25-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-big-win-x25/',
  },

  {
    title: 'Book of Anksunamun: Rockways',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_book-of-amaterasu.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-book-of-anksunamun-rockways/',
  },

  {
    title: 'Buildin’ Bucks',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-13.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-buildin-bucks/',
  },

  {
    title: 'Cancan Saloon Deluxe',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_cancandeluxe3.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-cancan-saloon-deluxe/',
  },

  {
    title: 'Capymania Yellow',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Capymania_yellow.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-capymania-yellow/',
  },

  {
    title: 'Carnival Bananza',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Carnival_Bananza.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-carnival-bananza/',
  },

  {
    title: 'Catch The Gold Hold and Win',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Catch_the_Gold_Hold__Win.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-catch-the-gold-hold-and-win/',
  },

  {
    title: 'Chicken Rush',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Chicken_Rush.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-chicken-rush/',
  },

  {
    title: 'Christmas Infinite Gifts',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_infgifts.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-christmas-infinite-gifts/',
  },

  {
    title: 'CRASH, HAMSTER, CRASH!',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_hamster.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-crash-hamster-crash/',
  },

  {
    title: 'Dansband På Turné',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-3.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-dansband-p%c3%a5-turn%c3%a9/',
  },

  {
    title: 'Diamond of Jungle',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Diamond_of_Jungle.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-diamond-of-jungle/',
  },

  {
    title: 'Dice Disco Mega Stacks',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_dicedisco.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-dice-disco-mega-stacks/',
  },

  {
    title: 'Divine Divas',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-11.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-divine-divas/',
  },

  {
    title: 'Dragon`s Crash',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Dragon_s_Crash.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-dragons-crash/',
  },

  {
    title: 'Dragon`s Lucky 25',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_lucky25.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-dragons-lucky-25/',
  },

  {
    title: 'Dreamshock: Jackpot X',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_dreamshock.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-dreamshock-jackpot-x/',
  },

  {
    title: 'Fabulous Farm Slot',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_fabfarm-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-fabulous-farm-slot/',
  },

  {
    title: 'Fishing Club',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Fishing_Club.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-fishing-club/',
  },

  {
    title: 'Fortuna Trueways',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Fortuna_Trueways.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-fortuna-trueways/',
  },

  {
    title: 'Fruit Machine Megabonus',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_fruitmachine.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-fruit-machine-megabonus/',
  },

  {
    title: 'Fruit Vegas Extreme X125',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_fruitvegas125-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-fruit-vegas-extreme-x125/',
  },

  {
    title: 'GEMIX 100',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-6.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gemix-100/',
  },

  {
    title: 'Gemza',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Gemza.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gemza/',
  },

  {
    title: 'God of Wealth Hold and Win',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/God_of_Wealth_HW.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-god-of-wealth-hold-and-win/',
  },

  {
    title: 'Gold Magnate',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Gold_Magnate.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gold-magnate/',
  },

  {
    title: 'Gold of Fortune God',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-19.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gold-of-fortune-god/',
  },

  {
    title: 'Gold of Minotaurs',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Gold_of_Minos.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gold-of-minotaurs/',
  },

  {
    title: 'Gryphon`s Castle Rush 25',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_gryphon25.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-gryphons-castle-rush-25/',
  },

  {
    title: 'Haunted Reels',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Haunted_Reels.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-haunted-reels/',
  },

  {
    title: 'Hello win!',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_hellowin.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-hello-win/',
  },

  {
    title: 'Hook Up! Fishing Wars',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_fishing.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-hook-up-fishing-wars/',
  },

  {
    title: 'Hot Fruit x15',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_hotfruit-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-hot-fruit-x15/',
  },

  {
    title: 'HotTest 666',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Hottest_666.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-hottest-666/',
  },

  {
    title: 'Ice Number One',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/game_ice1-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-ice-number-one/',
  },

  {
    title: 'Ice Scratch Gold',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/Ice_Scratch_Gold.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-ice-scratch-gold/',
  },

  {
    title: 'Joker Flip',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-18.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-joker-flip/',
  },

  {
    title: 'Journey to Paris',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/games/playngo_games_prvw-7.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-journey-to-paris/',
  },


];




const NewGames = [
  {
    title: 'Keepers Of The Secret',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Keepers_Of_The_Secret.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-keepers-of-the-secret/',
    dataRef: 'game1'
  },
  {
    title: 'King’s Mask Eclipse of Gods',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-4.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-kings-mask-eclipse-of-gods/',

  },
  {
    title: 'Kingdom Below',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-10.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-kingdom-below/',

  },
  {
    title: 'Kite Festival Crash Game',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_kitefest2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-kite-festival-crash-game/',

  },
  {
    title: 'Kraken`s Hunger',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/KrakensHanger.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-krakens-hunger/',

  },
  {
    title: 'Lady of Fortune Remastered',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-9.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-lady-of-fortune-remastered/',

  },
  {
    title: 'Luck and Magic Scratch',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Luck__Magic_Scratch.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-luck-and-magic-scratch/',

  },
  {
    title: 'Lucky 8 Merge Up',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Lucky_8_Merge_Up.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-lucky-8-merge-up/',

  },
  {
    title: 'Lucky Dragon Multidice X',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Lucky_Dragon_MultiDice_X.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-lucky-dragon-multidice-x/',

  },
  {
    title: 'Mafia Gold',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-1.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-mafia-gold/',

  },
  {
    title: 'Mayan Riches: Bingo!',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_mayan.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-mayan-riches-bingo/',

  },
  {
    title: 'Merlin Realm of Charm',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-12.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-merlin-realm-of-charm/',

  },
  {
    title: 'Mine Gems',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Mine_Gems.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-mine-gems/',

  },
  {
    title: 'Minotaurs Wilds',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_minotaur.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-minotaurs-wilds/',

  },
  {
    title: 'Mirror Joker',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-mirror-joker/',

  },
  {
    title: 'Mist',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_mist.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-mist/',

  },
  {
    title: 'Oasis of Dead',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-14.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-oasis-of-dead/',

  },
  {
    title: 'Oof',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/OOF_The_Goldmine_Planet.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-oof/',

  },
  {
    title: 'Panda Luck',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Panda_Luck.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-panda-luck/',

  },
  {
    title: 'Paper Lanterns Crash Game',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_lantern.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-paper-lanterns-crash-game/',

  },
  {
    title: 'Pop Zen',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Pop_Zen.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-pop-zen/',

  },
  {
    title: 'Re Kill Ultimate',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_rekill-rerun.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-re-kill-ultimate/',

  },
  {
    title: 'Reel Eldorado',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_reeleldo2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-reel-eldorado/',

  },
  {
    title: 'Reveal the Kraken',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_kraken.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-reveal-the-kraken/',

  },
  {
    title: 'Rich Wilde and the Tome of Insanity',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-rich-wilde-and-the-tome-of-insanity/',

  },
  {
    title: 'Riot Ultimate',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_riotultimate3.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-riot-ultimate/',

  },
  {
    title: 'Rise of Olympus Origins',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-15.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-rise-of-olympus-origins/',

  },
  {
    title: 'Robospin',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Robospin.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-robospin/',

  },
  {
    title: 'Royal Fruits Multilines',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Royal_Fruits_Multilines.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-royal-fruits-multilines/',

  },
  {
    title: 'Scourge of Rome',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-5.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-scourge-of-rome/',

  },
  {
    title: 'Secret Bar Multidice X',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Secret_Bar_MultidiceX.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-secret-bar-multidice-x/',

  },
  {
    title: 'Snoop Dogs Dollars',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Snoop_Dogg_Dollars.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-snoop-dogs-dollars/',

  },

  {
    title: 'Sticky Fruit Madness',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_stickyfruit2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-sticky-fruit-madness/',

  },
  {
    title: 'Street Power',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/StreetPower.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-street-power/',

  },
  {
    title: 'Temple of Tollan',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-8.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-temple-of-tollan/',

  },
  {
    title: 'The Candy Slot Deluxe',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_candyslotd.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-the-candy-slot-deluxe/',

  },
  {
    title: 'The Incredible X Fu Hero',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-the-incredible-x-fu-hero/',

  },
  {
    title: 'The Pendragon Legend',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_pendragon.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-the-pendragon-legend/',

  },
  {
    title: 'Top Eagle',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Top_Eagle.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-top-eagle/',

  },
  {
    title: 'Train To Rio Grande',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Train_to_Rio-Grande.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-train-to-rio-grande/',

  },
  {
    title: 'Voodoo People',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Voodoo_People.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-voodoo-people/',

  },
  {
    title: 'Whispering Winds',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/playngo_games_prvw-17.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-whispering-winds/',

  },
  {
    title: 'Wild Heart',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Wild_Heart.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wild-heart/',

  },
  {
    title: 'Wild Phoenix Rises',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_phoenix2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wild-phoenix-rises/',

  },
  {
    title: 'Wild Tiger',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Wild_Tiger.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wild-tiger/',

  },
  {
    title: 'Wild West Trueways',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/Wild_West_TrueWays.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wild-west-trueways/',

  },
  {
    title: 'Wild Wild Bet',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wild-wild-bet/',

  },
  {
    title: 'Wood Luck!',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_woodluck2.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-wood-luck/',

  },
  {
    title: 'Yukon Fever',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_yukon.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-yukon-fever/',

  },
  {
    title: 'Zeus the Thunderer Deluxe',
    type: 'Аркада',
    rating: 4.5,
    imgSrc: '/new-games/game_zeusdeluxe.webp',
    href: 'https://casino-sultan-kz.kz/igrovye-avtomaty-online-kz/igrovoy-avtomat-zeus-the-thunderer-deluxe/',

  },

];



export default function Home() {
  return (
    <>

      <PopularGames
        games={GAMES}
        heading="ТОПОВЫЕ СЛОТЫ"
        revealHref="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
        dark
      />

      <BannerSection2
        imageUrl="/promo-banner.png"
        imageAlt="Sultan banner"
        ctaText="Внести депозит"
        ctaLink="https://example.com"
        overlay
        theme="dark"
        height="medium"
      />

      <PopularGames2
        games={NewGames}
        heading="Новые игры"
        revealHref="https://casino-sultan-kz.kz/goto/aHR0cHM6Ly9mZGxvY2F0b3Iuc2l0ZS9jY3pwbDBrLnBocD9rZXk9ZWdkM3loNm04dTh1d24zeDV1ZDMmQ2xpY2tJRD1jbnZfaWQ="
        dark
      />

      <TournamentsSection />

      <ArticleCasino />

      <Faq />

      <Reviews />

      <Footer />

    </>
  );
}
